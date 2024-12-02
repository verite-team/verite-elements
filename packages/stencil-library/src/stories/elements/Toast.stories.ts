import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Elements/Toast',
  component: 'vui-toast',
  id: 'elements-toast',
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => `
    <vui-button id="toastBtn" variant="outline">
      Show Toast</vui-button>
    <vui-toast position="bottom-right" theme="inverted"></vui-toast>
  `,
  play: async ({ canvasElement }) => {
    console.log('play', canvasElement)
    let counter = 1
    const button = canvasElement.querySelector('#toastBtn') as HTMLElement
    if (!button) return

    // Add click handler
    button.addEventListener('click', () => {
      const toast = canvasElement.querySelector('vui-toast') as any
      if (toast) {
        toast.show({
          title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
          type: 'success',
        })
      }
    })

    // Optionally, trigger a click to show initial toast
    button.click()
  },
  parameters: {
    docs: {
      story: {
        inline: true,
        autoplay: true,
        height: '400px',
      },
      source: {
        code: `
// JavaScript
let counter = 1;
const button = document.querySelector('#toastBtn')
button.addEventListener('click', () => {
  const toast = document.querySelector('vui-toast')
  toast.show({
    title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
    type: 'success',
  })
})

// HTML
<vui-button id="toastBtn">Show Toast</vui-button>
<vui-toast position="bottom-right" theme="inverted"></vui-toast>
        `,
        language: 'javascript',
      },
    },
  },
}
