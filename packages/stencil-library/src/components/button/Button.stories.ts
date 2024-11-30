import type { Meta, StoryObj } from '@storybook/web-components'

// import notes from './readme.md'

interface ButtonProps {
  /** The visual style of the button */
  variant: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'

  /** The size of the button */
  size: 'default' | 'sm' | 'lg' | 'icon'

  /** Controls the button's width */
  width: 'auto' | 'full'

  /** Indicates if the button is in a loading/busy state */
  busy: boolean

  /** The HTML button type attribute */
  type: 'button' | 'submit' | 'reset'
}

/**
 * A versatile button component that supports multiple variants, sizes, and states.
 * Use this component for user interactions and form submissions.
 */
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: 'vui-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: true,
        // This will make the docs stories respect the dark mode
        // parameters: {
        //   backgrounds: {
        //     default: 'dark',
        //   },
        //   themes: {
        //     default: 'dark',
        //   },
        // },
      },
      // container: ({ children }) => `
      //   <div class="dark">
      //     ${children}
      //   </div>
      // `,
    },
  },
  argTypes: {
    size: {
      description: 'The size of the button.',
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    variant: {
      description: 'The visual style of the button.',
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    width: {
      description: "Controls the button's width.",
      control: { type: 'select' },
      options: ['auto', 'full'],
    },
    type: {
      description: 'The HTML button type attribute.',
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    busy: {
      description: 'Indicates if the button is in a loading/busy state.',
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<ButtonProps>

/**
 * The default button configuration.
 * This represents the most common use case for the button component.
 */
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    width: 'auto',
    busy: false,
    type: 'button',
  },
  render: (args: ButtonProps) => `
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

/**
 * Showcase of all available button variants.
 * Choose the appropriate variant based on the button's importance and context in your UI.
 */
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

/**
 * Different size options for the button component.
 * Use different sizes to create visual hierarchy or fit specific layouts.
 */
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

/**
 * Example of a button in loading state.
 * Use this state to indicate that an action is being processed.
 */
export const Loading: Story = {
  args: {
    busy: true,
    variant: 'default',
    size: 'default',
    width: 'auto',
    type: 'button',
  },
  render: (args: ButtonProps) => `
    <vui-button busy="${args.busy}">Loading</vui-button>
  `,
}

/**
 * Full-width button variation.
 * Useful for mobile interfaces or when you want the button to span the entire container width.
 */
export const FullWidth: Story = {
  args: {
    width: 'full',
    variant: 'default',
    size: 'default',
    busy: false,
    type: 'button',
  },
  render: (args: ButtonProps) => `
    <vui-button width="${args.width}">Full Width Button</vui-button>
  `,
}
