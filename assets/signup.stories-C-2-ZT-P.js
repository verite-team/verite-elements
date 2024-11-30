const a={title:"Elements/Signup",component:"vui-signup",argTypes:{}},i={render:()=>`
<vui-i18n-provider locale="en" translations-path="/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signup.default.title|product:Acme"
    description="$signup.default.description"
    brand-label="$brand.label"
    brand-logo="/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button class="google-button" variant="outline" style="width: 100%">
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
      elements='["name", "email", "password", "forgotPassword"]'
      submit-label="$authForm.submit"
      forgot-password-label="$authForm.forgotPassword"
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  `};var t,e,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
<vui-i18n-provider locale="en" translations-path="/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signup.default.title|product:Acme"
    description="$signup.default.description"
    brand-label="$brand.label"
    brand-logo="/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signup.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button class="google-button" variant="outline" style="width: 100%">
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
      elements='["name", "email", "password", "forgotPassword"]'
      submit-label="$authForm.submit"
      forgot-password-label="$authForm.forgotPassword"
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  \`
}`,...(o=(e=i.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const l=["Default"];export{i as Default,l as __namedExportsOrder,a as default};
