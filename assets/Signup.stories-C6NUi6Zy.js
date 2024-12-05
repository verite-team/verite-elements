import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const g={title:"Elements/Signup",component:"vui-signup"},o={render:()=>`
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signup.default.title|product:Acme"
    description="$signup.default.description"
    brand-label="$brand.label"
    brand-logo="./verite-elements/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button value="apple" class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button value="google" class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="google" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Google"}'></vui-i18n>
          </vui-flex>
        </vui-button>
      </vui-flex>
      <vui-divider orientation="horizontal" style="margin: 16px 0">
        <vui-i18n text="$signup.option"></vui-i18n>
      </vui-divider>
    </div>
    <vui-auth-form
      action="signup"
      display='["name", "email", "password", "forgotPassword"]'
      submit-label="$authForm.submit"
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  `,play:async({canvasElement:d})=>{const t=d.ownerDocument,n=e=>{i("buttonClick")(e)},l=e=>{i("linkClick")(e)},r=e=>{i("formError")(e)},a=e=>{i("formSubmit")(e)};t.addEventListener("buttonClick",n),t.addEventListener("linkClick",l),t.addEventListener("formError",r),t.addEventListener("formSubmit",a),await new Promise(e=>{const c=()=>{t.removeEventListener("buttonClick",n),t.removeEventListener("linkClick",l),t.removeEventListener("formSubmit",a),t.removeEventListener("formError",r),e()};window.addEventListener("unload",c)})}};var u,s,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
<vui-i18n-provider translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signup.default.title|product:Acme"
    description="$signup.default.description"
    brand-label="$brand.label"
    brand-logo="./verite-elements/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button value="apple" class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button value="google" class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="google" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Google"}'></vui-i18n>
          </vui-flex>
        </vui-button>
      </vui-flex>
      <vui-divider orientation="horizontal" style="margin: 16px 0">
        <vui-i18n text="$signup.option"></vui-i18n>
      </vui-divider>
    </div>
    <vui-auth-form
      action="signup"
      display='["name", "email", "password", "forgotPassword"]'
      submit-label="$authForm.submit"
    ></vui-auth-form>
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
    const handleLinkClick = (event: CustomEvent<LinkClickDetail>) => {
      action('linkClick')(event);
    };
    const handleFormError = (event: CustomEvent<FormErrorDetail>) => {
      action('formError')(event);
    };
    const handleFormSubmit = (event: CustomEvent<FormSubmitDetail>) => {
      action('formSubmit')(event);
    };

    // Add all listeners
    doc.addEventListener('buttonClick', handleButtonClick);
    doc.addEventListener('linkClick', handleLinkClick);
    doc.addEventListener('formError', handleFormError);
    doc.addEventListener('formSubmit', handleFormSubmit);

    // Execute cleanup within the Promise
    await new Promise<void>(resolve => {
      const cleanup = () => {
        doc.removeEventListener('buttonClick', handleButtonClick);
        doc.removeEventListener('linkClick', handleLinkClick);
        doc.removeEventListener('formSubmit', handleFormSubmit);
        doc.removeEventListener('formError', handleFormError);
        resolve();
      };

      // Attach cleanup to window unload or you can call it when needed
      window.addEventListener('unload', cleanup);
    });
  }
}`,...(v=(s=o.parameters)==null?void 0:s.docs)==null?void 0:v.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,g as default};
