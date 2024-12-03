const o={title:"Elements/Permissions Request",component:"vui-request",id:"elements-request",argTypes:{}},e={render:()=>`
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json" 
  style="display: flex; flex-direction: column; gap: 24px; max-width: 420px; margin: 0 auto;">
  <vui-auth-alt-card elevation="lg" heading="$request.title" description="$request.description" size="xl">
    <vui-request
      application="Test App"
      permissions='["read profile", "write posts", "openid"]'
      redirect-uri="https://example.com"
    >
      <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    </vui-request>
    <vui-auth-footer slot="footer">
      <div style="text-align: center; padding: 1.5rem; line-height: 1.5">
        By continuing, you agree to our
        <vui-link href="https://example.com/terms">Terms of Service</vui-link> and
        <vui-link href="https://example.com/privacy">Privacy Policy</vui-link>
      </div>
    </vui-auth-footer>
  </vui-auth-alt-card>
</vui-i18n-provider>
  `};var i,t,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => \`
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json" 
  style="display: flex; flex-direction: column; gap: 24px; max-width: 420px; margin: 0 auto;">
  <vui-auth-alt-card elevation="lg" heading="$request.title" description="$request.description" size="xl">
    <vui-request
      application="Test App"
      permissions='["read profile", "write posts", "openid"]'
      redirect-uri="https://example.com"
    >
      <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    </vui-request>
    <vui-auth-footer slot="footer">
      <div style="text-align: center; padding: 1.5rem; line-height: 1.5">
        By continuing, you agree to our
        <vui-link href="https://example.com/terms">Terms of Service</vui-link> and
        <vui-link href="https://example.com/privacy">Privacy Policy</vui-link>
      </div>
    </vui-auth-footer>
  </vui-auth-alt-card>
</vui-i18n-provider>
  \`
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,o as default};
