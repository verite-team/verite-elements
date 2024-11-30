const L={title:"Components/Card",component:"vui-card",argTypes:{elevation:{control:"select",options:["none","sm","md","lg","xl"],description:"Controls the shadow depth of the card"}}},e={args:{elevation:"md"},render:S=>`
    <vui-card elevation="${S.elevation}">
      <vui-card-header>
        <vui-card-title>Default Card</vui-card-title>
      </vui-card-header>
      <vui-card-content>
        <span>This is a basic card component with some content.</span>
      </vui-card-content>
    </vui-card>
  `},a={render:()=>`
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
  `},t={render:()=>`
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
  `},r={render:()=>`
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
  `},n={render:()=>`
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
  `},i={render:()=>`
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
  `};var d,c,o;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    elevation: 'md'
  },
  render: args => \`
    <vui-card elevation="\${args.elevation}">
      <vui-card-header>
        <vui-card-title>Default Card</vui-card-title>
      </vui-card-header>
      <vui-card-content>
        <span>This is a basic card component with some content.</span>
      </vui-card-content>
    </vui-card>
  \`
}`,...(o=(c=e.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var u,v,s;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
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
  \`
}`,...(s=(v=a.parameters)==null?void 0:v.docs)==null?void 0:s.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
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
  \`
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
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
  \`
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
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
  \`
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,w,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => \`
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
  \`
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const T=["Default","ElevationLevels","Interactive","ContentExample","CardGrid","CustomContent"];export{n as CardGrid,r as ContentExample,i as CustomContent,e as Default,a as ElevationLevels,t as Interactive,T as __namedExportsOrder,L as default};
