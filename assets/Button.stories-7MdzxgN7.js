const W={title:"Components/Button",component:"vui-button",tags:["autodocs"],parameters:{docs:{story:{inline:!0},description:{component:`A versatile button component that supports multiple variants, sizes, and states.
Use this component for user interactions and form submissions.`}}},argTypes:{size:{description:"The size of the button.",control:{type:"select"},options:["default","sm","lg","icon"]},variant:{description:"The visual style of the button.",control:{type:"select"},options:["default","secondary","outline","ghost","destructive"]},width:{description:"Controls the button's width.",control:{type:"select"},options:["auto","full"]},type:{description:"The HTML button type attribute.",control:{type:"select"},options:["button","submit","reset"]},busy:{description:"Indicates if the button is in a loading/busy state.",control:{type:"boolean"}}}},e={args:{variant:"default",size:"default",width:"auto",busy:!1,type:"button"},render:t=>`
    <vui-button
      variant="${t.variant}"
      size="${t.size}"
      width="${t.width}"
      busy="${t.busy}"
      type="${t.type}"
    >
      Button
    </vui-button>
  `},n={render:()=>`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <vui-button variant="default">Default</vui-button>
      <vui-button variant="secondary">Secondary</vui-button>
      <vui-button variant="outline">Outline</vui-button>
      <vui-button variant="ghost">Ghost</vui-button>
      <vui-button variant="destructive">Destructive</vui-button>
    </div>
  `},o={render:()=>`
    <div style="display: flex; gap: 8px; align-items: center;">
      <vui-button size="sm">Small</vui-button>
      <vui-button size="default">Default</vui-button>
      <vui-button size="lg">Large</vui-button>
      <vui-button size="icon">👍</vui-button>
    </div>
  `},i={args:{busy:!0,variant:"default",size:"default",width:"auto",type:"button"},render:t=>`
    <vui-button busy="${t.busy}">Loading</vui-button>
  `},s={args:{width:"full",variant:"default",size:"default",busy:!1,type:"button"},render:t=>`
    <vui-button width="${t.width}">Full Width Button</vui-button>
  `};var a,u,r,d,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    width: 'auto',
    busy: false,
    type: 'button'
  },
  render: (args: ButtonProps) => \`
    <vui-button
      variant="\${args.variant}"
      size="\${args.size}"
      width="\${args.width}"
      busy="\${args.busy}"
      type="\${args.type}"
    >
      Button
    </vui-button>
  \`
}`,...(r=(u=e.parameters)==null?void 0:u.docs)==null?void 0:r.source},description:{story:`The default button configuration.
This represents the most common use case for the button component.`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var c,p,b,v,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <vui-button variant="default">Default</vui-button>
      <vui-button variant="secondary">Secondary</vui-button>
      <vui-button variant="outline">Outline</vui-button>
      <vui-button variant="ghost">Ghost</vui-button>
      <vui-button variant="destructive">Destructive</vui-button>
    </div>
  \`
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source},description:{story:`Showcase of all available button variants.
Choose the appropriate variant based on the button's importance and context in your UI.`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,h,m,g,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => \`
    <div style="display: flex; gap: 8px; align-items: center;">
      <vui-button size="sm">Small</vui-button>
      <vui-button size="default">Default</vui-button>
      <vui-button size="lg">Large</vui-button>
      <vui-button size="icon">👍</vui-button>
    </div>
  \`
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:`Different size options for the button component.
Use different sizes to create visual hierarchy or fit specific layouts.`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var z,x,$,S,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    busy: true,
    variant: 'default',
    size: 'default',
    width: 'auto',
    type: 'button'
  },
  render: (args: ButtonProps) => \`
    <vui-button busy="\${args.busy}">Loading</vui-button>
  \`
}`,...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.source},description:{story:`Example of a button in loading state.
Use this state to indicate that an action is being processed.`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var B,L,T,F,U;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    width: 'full',
    variant: 'default',
    size: 'default',
    busy: false,
    type: 'button'
  },
  render: (args: ButtonProps) => \`
    <vui-button width="\${args.width}">Full Width Button</vui-button>
  \`
}`,...(T=(L=s.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:`Full-width button variation.
Useful for mobile interfaces or when you want the button to span the entire container width.`,...(U=(F=s.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};const C=["Default","Variants","Sizes","Loading","FullWidth"];export{e as Default,s as FullWidth,i as Loading,o as Sizes,n as Variants,C as __namedExportsOrder,W as default};
