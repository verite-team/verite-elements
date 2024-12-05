import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const m={title:"Elements/OTP",component:"vui-otp",parameters:{componentSubtitle:"One-time Password",docs:{description:{component:"A component for entering and validating one-time passwords (OTP). Commonly used for two-factor authentication and verification processes."}}}},o={render:()=>`
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    class="card--otp"
    elevation="lg"
        heading="$otp.title"
        description="$otp.description"
        prompt="$otp.prompt"
        action="$otp.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-otp submit-label="$otp.submit"></vui-otp>
  </vui-auth-card>
</vui-i18n-provider>
  `,play:async({canvasElement:c})=>{const e=c.ownerDocument,n=t=>{a("buttonClick")(t)},i=t=>{a("formSubmit")(t)};e.addEventListener("buttonClick",n),e.addEventListener("formSubmit",i),await new Promise(t=>{const d=()=>{e.removeEventListener("buttonClick",n),e.removeEventListener("formSubmit",i),t()};window.addEventListener("unload",d)})}};var r,s,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    class="card--otp"
    elevation="lg"
        heading="$otp.title"
        description="$otp.description"
        prompt="$otp.prompt"
        action="$otp.action"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <vui-otp submit-label="$otp.submit"></vui-otp>
  </vui-auth-card>
</vui-i18n-provider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const doc = canvasElement.ownerDocument;
    const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
      action('buttonClick')(event);
    };
    const handleFormSubmit = (event: CustomEvent<FormSubmitDetail>) => {
      action('formSubmit')(event);
    };
    doc.addEventListener('buttonClick', handleButtonClick);
    doc.addEventListener('formSubmit', handleFormSubmit);

    // Execute cleanup within the Promise
    await new Promise<void>(resolve => {
      const cleanup = () => {
        doc.removeEventListener('buttonClick', handleButtonClick);
        doc.removeEventListener('formSubmit', handleFormSubmit);
        resolve();
      };
      window.addEventListener('unload', cleanup);
    });
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,m as default};
