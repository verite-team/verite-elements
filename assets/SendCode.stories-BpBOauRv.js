const t={title:"Elements/Send Code",component:"vui-send-code",id:"elements-send-code",argTypes:{}},i={render:()=>`
 <vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json"> 
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.email.title"
    description="$signin.email.description"
    prompt="$signin.email.prompt"
    action="$signin.email.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-auth-form action="email" elements='["email"]' submit-label="$signin.email.submit"></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>`};var e,a,n;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
 <vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json"> 
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.email.title"
    description="$signin.email.description"
    prompt="$signin.email.prompt"
    action="$signin.email.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-auth-form action="email" elements='["email"]' submit-label="$signin.email.submit"></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>\`
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const l=["Default"];export{i as Default,l as __namedExportsOrder,t as default};
