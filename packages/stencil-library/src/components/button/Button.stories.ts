import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Components/Button',
  component: 'vui-button',
  // parameters: {
  //   docs: {
  //     source: {
  //       transform: code => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
  //     },
  //   },
  // },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
    },
    busy: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
}
export default meta

type Story = StoryObj

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    width: 'auto',
    busy: false,
  },
  render: args => `
    <vui-button
      variant="${args.variant}"
      size="${args.size}"
      width="${args.width}"
      busy="${args.busy}"
      type="${args.type}"
    >
      Button
    </vui-button>
  `,
}

export const Variants: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <vui-button variant="default">Default</vui-button>
      <vui-button variant="secondary">Secondary</vui-button>
      <vui-button variant="outline">Outline</vui-button>
      <vui-button variant="ghost">Ghost</vui-button>
      <vui-button variant="destructive">Destructive</vui-button>
    </div>
  `,
}

export const Sizes: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; align-items: center;">
      <vui-button size="sm">Small</vui-button>
      <vui-button size="default">Default</vui-button>
      <vui-button size="lg">Large</vui-button>
      <vui-button size="icon">👍</vui-button>
    </div>
  `,
}

export const Loading: Story = {
  args: {
    busy: true,
  },
  render: args => `
    <vui-button busy="${args.busy}">Loading</vui-button>
  `,
}

export const FullWidth: Story = {
  args: {
    width: 'full',
  },
  render: args => `
    <vui-button width="${args.width}">Full Width Button</vui-button>
  `,
}
