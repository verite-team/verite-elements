import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const p={title:"Elements/Permissions Request",component:"vui-request",id:"elements-request",argTypes:{}},e={render:()=>`
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
  `,play:async({canvasElement:a})=>{const r=a.ownerDocument,n=l=>{s("buttonClick")(l)};r.addEventListener("buttonClick",n)}};var t,i,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  \`,
  play: async ({
    canvasElement
  }) => {
    const doc = canvasElement.ownerDocument;
    const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
      action('buttonClick')(event);
    };
    doc.addEventListener('buttonClick', handleButtonClick);
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,p as default};
