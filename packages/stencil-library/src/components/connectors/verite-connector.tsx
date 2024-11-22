import { Component, Element, Listen, Prop, h } from '@stencil/core'

@Component({
  tag: 'verite-connector',
  shadow: false, // Changed to false to allow slot content to maintain its styling
})
export class VeriteConnector {
  @Element() element!: HTMLElement
  @Prop() type: 'signup' | 'signin' = 'signup' // Allow different auth types

  // @Listen('ready')
  // handleReady(event: CustomEvent) {
  //   // Could initialize any necessary auth state or services
  //   console.log('Auth component ready', this.type, event)
  // }

  @Listen('forgotPassword')
  handleForgotPassword(event: CustomEvent) {
    console.log('Forgot password clicked', event)
  }

  @Listen('actionClick')
  handleActionClick(event: CustomEvent) {
    console.log('Action clicked', event)
  }

  @Listen('formSubmit')
  async handleFormSubmit(event: CustomEvent<{ email: string; password: string }>) {
    event.stopPropagation()
    // const vuiComponent = event.target as HTMLElement
    console.log('type -->', this.type)
    console.log('vuiComponent on submit -->', event.detail)

    // try {
    //   // Set loading state on the vui component
    //   vuiComponent.setAttribute('loading', 'true')

    //   // Make API call based on type
    //   const endpoint = this.type === 'signup' ? '/api/signup' : '/api/signin'
    //   const response = await fetch(endpoint, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(event.detail),
    //   })

    //   if (!response.ok) {
    //     throw new Error(`${this.type} failed`)
    //   }

    //   const data = await response.json()

    //   // Emit success event
    //   this.element.dispatchEvent(
    //     new CustomEvent(`${this.type}Success`, {
    //       detail: data,
    //       bubbles: true,
    //       composed: true,
    //     })
    //   )
    // } catch (err) {
    //   // Pass error back to vui component
    //   vuiComponent.dispatchEvent(
    //     new CustomEvent('error', {
    //       detail: { message: err.message },
    //       bubbles: true,
    //       composed: true,
    //     })
    //   )
    // } finally {
    //   vuiComponent.setAttribute('loading', 'false')
    // }
  }

  render() {
    return <slot />
  }
}
