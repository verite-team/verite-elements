import { Component, Event, EventEmitter, Prop } from '@stencil/core'
import {
  GoogleCredentialResponse,
  GoogleTokenResponse,
  SignInWithIdTokenCredentials,
} from './google-one-tap-interfaces'

@Component({
  tag: 'vui-google-one-tap',
  styleUrl: 'google-one-tap.css',
  shadow: true,
})
export class GoogleOneTap {
  @Prop() googleClientId!: string

  @Event() googleCredential: EventEmitter<SignInWithIdTokenCredentials>
  @Event() googleError: EventEmitter<Error>

  private cleanup: (() => void) | null = null

  componentDidLoad() {
    const script = document.createElement('script')
    script.id = 'google-sign-in'
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true

    script.onload = () => {
      if (globalThis.google) {
        this.oneTapSignInPrompt()
        this.cleanup = () => globalThis.google?.accounts.id.cancel()
      }
    }

    document.body.appendChild(script)
  }

  disconnectedCallback() {
    if (this.cleanup) {
      this.cleanup()
    }
  }

  private oneTapSignInPrompt() {
    globalThis.google.accounts.id.initialize({
      client_id: this.googleClientId,
      callback: this.handleCredentialResponse.bind(this),
      cancel_on_tap_outside: false,
      itp_support: true,
    })
    globalThis.google.accounts.id.prompt()
  }

  private handleCredentialResponse(response: GoogleCredentialResponse) {
    const responsePayload = this.decodeJWT(response.credential)
    if (!responsePayload?.email_verified) {
      this.oneTapSignInPrompt()
    } else {
      this.oauthSignIn(responsePayload.email)
    }
  }

  private decodeJWT(token: string) {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      return JSON.parse(jsonPayload)
    } catch (err) {
      console.error('Error decoding JWT:', err)
      this.googleError.emit(err instanceof Error ? err : new Error('Failed to decode JWT'))
      return null
    }
  }

  private oauthSignIn(googleId: string) {
    const client = globalThis.google.accounts.oauth2.initTokenClient({
      client_id: this.googleClientId,
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
      hint: googleId,
      prompt: '',
      callback: (tokenResponse: GoogleTokenResponse) => {
        this.googleCredential.emit({
          provider: 'google',
          token: tokenResponse.access_token,
        })
      },
    })
    client.requestAccessToken()
  }

  render() {
    return null // Google One Tap UI is injected by the Google script
  }
}
