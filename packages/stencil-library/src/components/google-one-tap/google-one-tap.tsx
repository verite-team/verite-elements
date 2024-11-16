import { Component, Event, EventEmitter, Prop } from '@stencil/core'

type SignInWithIdTokenCredentials = {
  /** Provider name or OIDC `iss` value identifying which provider should be used to verify the provided token. Supported names: `google`, `apple`, `azure`, `facebook`, `kakao`, `keycloak` (deprecated). */
  provider: 'google'
  /** OIDC ID token issued by the specified provider. The `iss` claim in the ID token must match the supplied provider. Some ID tokens contain an `at_hash` which require that you provide an `access_token` value to be accepted properly. If the token contains a `nonce` claim you must supply the nonce used to obtain the ID token. */
  token: string
  /** If the ID token contains an `at_hash` claim, then the hash of this value is compared to the value in the ID token. */
  access_token?: string
  /** If the ID token contains a `nonce` claim, then the hash of this value is compared to the value in the ID token. */
  nonce?: string
  options?: {
    /** Verification token received when the user completes the captcha on the site. */
    captchaToken?: string
  }
}

@Component({
  tag: 'vui-google-one-tap',
  shadow: true,
})
export class GoogleOneTap {
  @Prop() googleClientId!: string

  @Event() googleCredential: EventEmitter
  @Event() googleError: EventEmitter

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

  private handleCredentialResponse(response: any) {
    // One Tap Sign in returns a JWT token.
    const responsePayload = this.decodeJWT(response.credential)
    if (!responsePayload.email_verified) {
      this.oneTapSignInPrompt()
    } else {
      // We are passing the signed in email id to oAuth.
      // If we pass an email id to oAuth consent.
      // If the user has already given the oAuth consent. it will get auto selected.
      this.oauthSignIn(responsePayload.email)
    }
  }

  // Utility function to decode the JWT token
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
      return null
    }
  }

  render() {
    return null // Google One Tap UI is injected by the Google script
  }

  private oauthSignIn(googleId: string) {
    const client = globalThis.google.accounts.oauth2.initTokenClient({
      client_id: this.googleClientId,
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
      hint: googleId,
      prompt: '', // Specified as an empty string to auto select the account which we have already consented for use.
      callback: (tokenResponse: SignInWithIdTokenCredentials) => {
        const access_token = tokenResponse.access_token
        this.googleCredential.emit({
          provider: 'google',
          token: access_token,
        })
      },
    })
    client.requestAccessToken()
  }
}
