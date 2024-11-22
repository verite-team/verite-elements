# verite-otp

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type        | Default                                                                                                                                                                                                                                                                                                       |
| -------- | --------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labels` | --        |             | `OtpLabels` | `{     title: 'Verify your email',     description: 'We sent a verification code to your email. Please enter it below.',     verifyButtonText: 'Verify',     noCodeText: "Didn't receive the code?",     resendText: 'Resend',     backToSignInText: 'Back to sign in',     signInButtonText: 'Sign in',   }` |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `formSubmit` |             | `CustomEvent<string>` |
| `ready`      |             | `CustomEvent<void>`   |
| `resend`     |             | `CustomEvent<void>`   |


## Shadow Parts

| Part               | Description |
| ------------------ | ----------- |
| `"logo-container"` |             |
| `"otp"`            |             |


## Dependencies

### Depends on

- [vui-card-header](../card)
- [vui-placeholder](../placeholder)
- [vui-card-title](../card)
- [vui-card-description](../card)
- [vui-card-content](../card)
- [vui-flex](../flex)
- [vui-textbox](../textbox)
- [vui-button](../button)
- [vui-card-footer](../card)
- [vui-divider](../divider)
- [vui-powered-by](../powered-by)

### Graph
```mermaid
graph TD;
  vui-otp --> vui-card-header
  vui-otp --> vui-placeholder
  vui-otp --> vui-card-title
  vui-otp --> vui-card-description
  vui-otp --> vui-card-content
  vui-otp --> vui-flex
  vui-otp --> vui-textbox
  vui-otp --> vui-button
  vui-otp --> vui-card-footer
  vui-otp --> vui-divider
  vui-otp --> vui-powered-by
  vui-button --> vui-spinner
  style vui-otp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
