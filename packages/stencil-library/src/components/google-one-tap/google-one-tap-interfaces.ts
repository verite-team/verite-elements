export interface SignInWithIdTokenCredentials {
  /** Provider name or OIDC `iss` value identifying which provider should be used to verify the provided token. */
  provider: 'google'
  /** OIDC ID token issued by the specified provider. */
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

export interface GoogleCredentialResponse {
  credential: string
}

export interface GoogleTokenResponse {
  access_token: string
}
