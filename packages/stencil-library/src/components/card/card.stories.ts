import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Components/Card',
  component: 'vui-card',
  argTypes: {
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the shadow depth of the card',
    },
  },
}
export default meta

type Story = StoryObj

// Basic Card
export const Default: Story = {
  args: {
    elevation: 'md',
  },
  render: args => `
    <vui-card elevation="${args.elevation}">
      <vui-card-header>
        <vui-card-title>Default Card</vui-card-title>
      </vui-card-header>
      <vui-card-content>
        <span>This is a basic card component with some content.</span>
      </vui-card-content>
    </vui-card>
  `,
}

// Elevation Showcase
export const ElevationLevels: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <vui-card elevation="none">
        <vui-card-header>
          <vui-card-title>No Elevation</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>No shadow for flat cards</span>
        </vui-card-content>
      </vui-card>

      <vui-card elevation="sm">
        <vui-card-header>
          <vui-card-title>Small Elevation</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Subtle shadow for basic cards</span>
        </vui-card-content>
      </vui-card>

      <vui-card elevation="md">
        <vui-card-header>
          <vui-card-title>Medium Elevation</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Slightly more prominent shadow</span>
        </vui-card-content>
      </vui-card>

      <vui-card elevation="lg">
        <vui-card-header>
          <vui-card-title>Large Elevation</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Medium shadow for highlighted content</span>
        </vui-card-content>
      </vui-card>

      <vui-card elevation="xl">
        <vui-card-header>
          <vui-card-title>Extra Large Elevation</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Higher elevation for modal-like content</span>
        </vui-card-content>
      </vui-card>
    </div>
  `,
}

// Interactive Card with Hover Effect
export const Interactive: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
      <vui-card elevation="sm" 
        onmouseenter="this.setAttribute('elevation', 'lg')" 
        onmouseleave="this.setAttribute('elevation', 'sm')">
        <vui-card-header>
          <vui-card-title>Hover Me</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>This card changes elevation on hover</span>
        </vui-card-content>
      </vui-card>
    </div>
  `,
}

// Card with Content and Different Elevations
export const ContentExample: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <vui-card elevation="sm">
        <vui-card-header>
          <vui-card-title>Featured Content</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>This card uses elevation 2 to stand out slightly.</span>
        </vui-card-content>
        <vui-card-footer>
          <vui-button variant="default">Learn More</vui-button>
        </vui-card-footer>
      </vui-card>

      <vui-card elevation="lg">
        <vui-card-header>
          <vui-card-title>Important Notice</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>This card uses elevation 4 to draw more attention.</span>
        </vui-card-content>
        <vui-card-footer>
          <vui-button variant="default">Take Action</vui-button>
        </vui-card-footer>
      </vui-card>
    </div>
  `,
}

// Card Grid with Mixed Elevations
export const CardGrid: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
      <vui-card>
        <vui-card-header>
          <vui-card-title>Card 1</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Content for card 1</span>
        </vui-card-content>
      </vui-card>
      <vui-card>
        <vui-card-header>
          <vui-card-title>Card 2</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Content for card 2</span>
        </vui-card-content>
      </vui-card>
      <vui-card>
        <vui-card-header>
          <vui-card-title>Card 3</vui-card-title>
        </vui-card-header>
        <vui-card-content>
          <span>Content for card 3</span>
        </vui-card-content>
      </vui-card>
    </div>
  `,
}

// Card with Custom Content
export const CustomContent: Story = {
  render: () => `
    <vui-card>
      <vui-card-header>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 40px; height: 40px; background: #e2e2e2; border-radius: 50%;"></div>
          <vui-flex direction="column" gap="0.5rem">
            <vui-card-title>User Profile</vui-card-title>
            <small>Last updated: 2 hours ago</small>
          </vui-flex>
        </div>
      </vui-card-header>
      <vui-card-content>
        <vui-flex direction="column" gap="2.5rem">
          <div>
            <strong>Email:</strong>
            <span>user@example.com</span>
          </div>
          <div>
            <strong>Location:</strong>
            <span>New York, USA</span>
          </div>
        </vui-flex>
      </vui-card-content>
      <vui-card-footer>
        <div style="display: flex; justify-content: space-between; width: 100%;">
          <vui-button variant="outline">Edit Profile</vui-button>
          <vui-button variant="default">Save Changes</vui-button>
        </div>
      </vui-card-footer>
    </vui-card>
  `,
}
