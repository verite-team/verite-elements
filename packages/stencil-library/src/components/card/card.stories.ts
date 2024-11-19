import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Components/Card',
  component: 'vui-card',
  argTypes: {
    elevation: {
      control: 'select',
      options: ['1', '2', '3', '4', '5'],
      description: 'Controls the shadow depth of the card',
    },
  },
}
export default meta

type Story = StoryObj

// Basic Card
export const Default: Story = {
  args: {
    elevation: '1',
  },
  render: args => `
    <vui-card elevation="${args.elevation}">
      <h3>Default Card</h3>
      <p>This is a basic card component with some content.</p>
    </vui-card>
  `,
}

// Elevation Showcase
export const ElevationLevels: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <vui-card elevation="1">
        <h3>Elevation 1</h3>
        <p>Subtle shadow for basic cards</p>
      </vui-card>

      <vui-card elevation="2">
        <h3>Elevation 2</h3>
        <p>Slightly more prominent shadow</p>
      </vui-card>

      <vui-card elevation="3">
        <h3>Elevation 3</h3>
        <p>Medium shadow for highlighted content</p>
      </vui-card>

      <vui-card elevation="4">
        <h3>Elevation 4</h3>
        <p>Higher elevation for modal-like content</p>
      </vui-card>

      <vui-card elevation="5">
        <h3>Elevation 5</h3>
        <p>Highest elevation for important overlays</p>
      </vui-card>
    </div>
  `,
}

// Interactive Card with Hover Effect
export const Interactive: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
      <vui-card elevation="1" 
        onmouseenter="this.setAttribute('elevation', '3')" 
        onmouseleave="this.setAttribute('elevation', '1')">
        <h3>Hover Me</h3>
        <p>This card changes elevation on hover</p>
      </vui-card>
    </div>
  `,
}

// Card with Content and Different Elevations
export const ContentExample: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <vui-card elevation="2">
        <div style="padding: 16px;">
          <h3 style="margin-top: 0;">Featured Content</h3>
          <p>This card uses elevation 2 to stand out slightly.</p>
          <vui-button variant="default">Learn More</vui-button>
        </div>
      </vui-card>

      <vui-card elevation="4">
        <div style="padding: 16px;">
          <h3 style="margin-top: 0;">Important Notice</h3>
          <p>This card uses elevation 4 to draw more attention.</p>
          <vui-button variant="default">Take Action</vui-button>
        </div>
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
          <h3>Card 1</h3>
        </vui-card-header>
        <vui-card-content>
          <p>Content for card 1</p>
        </vui-card-content>
      </vui-card>
      <vui-card>
        <vui-card-header>
          <h3>Card 2</h3>
        </vui-card-header>
        <vui-card-content>
          <p>Content for card 2</p>
        </vui-card-content>
      </vui-card>
      <vui-card>
        <vui-card-header>
          <h3>Card 3</h3>
        </vui-card-header>
        <vui-card-content>
          <p>Content for card 3</p>
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
          <div>
            <h3 style="margin: 0;">User Profile</h3>
            <small>Last updated: 2 hours ago</small>
          </div>
        </div>
      </vui-card-header>
      <vui-card-content>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <strong>Email:</strong>
            <p>user@example.com</p>
          </div>
          <div>
            <strong>Location:</strong>
            <p>New York, USA</p>
          </div>
        </div>
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
