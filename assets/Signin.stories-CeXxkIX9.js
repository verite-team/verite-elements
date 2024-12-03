import{v as x}from"./v4-CQkTLCs1.js";const{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:E}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:d}=__STORYBOOK_MODULE_GLOBAL__;var S="storybook/actions",R=`${S}/action-event`,$={depth:10,clearOnStoryChange:!0,limit:50},h=(e,t)=>{let i=Object.getPrototypeOf(e);return!i||t(i)?i:h(i,t)},D=e=>!!(typeof e=="object"&&e&&h(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),A=e=>{if(D(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let i=Object.getOwnPropertyDescriptor(t,"view"),o=i==null?void 0:i.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...i,value:Object.create(o.constructor.prototype)}),t}return e},j=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?x():Date.now().toString(36)+Math.random().toString(36).substring(2);function P(e,t={}){let i={...$,...t},o=function(...a){var l,u;if(t.implicit){let p=(l="__STORYBOOK_PREVIEW__"in d?d.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(p){let r=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),c=new E({phase:p.phase,name:e,deprecated:r});if(r)console.warn(c);else throw c}}let f=O.getChannel(),b=j(),y=5,s=a.map(A),w=a.length>1?s:s[0],_={id:b,count:0,data:{name:e,args:w},options:{...i,maxDepth:y+(i.depth||3),allowFunction:i.allowFunction||!1}};f.emit(R,_)};return o.isAction=!0,o.implicit=t.implicit,o}const T={title:"Elements/Signin",component:"vui-signin",args:{buttonClick:P("button-click")},argTypes:{}},n={render:e=>`
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.default.title|product:Acme"
    description="$signin.default.description"
    brand-label="$brand.label"
    brand-logo="./verite-elements/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="google" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Google"}'></vui-i18n>
          </vui-flex>
        </vui-button>
      </vui-flex>
      <vui-divider orientation="horizontal" style="margin: 16px 0">
        <vui-i18n text="$signin.option"></vui-i18n>
      </vui-divider>
    </div>
    <vui-auth-form
      action="signin"
      display='["email", "password"]'
      submit-label="$authForm.submit"
      password-validation='{"minLength": 8, "requireUppercase": true, "requireLowercase": true, "requireNumbers": true, "requireSpecialChars": true}'
      forgot-password-label="$authForm.forgotPassword"
      onSubmit=${e.onFormSubmit}
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  `};var v,g,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => \`
<vui-i18n-provider locale="en" translations-path="./assets/locales/{locale}.json">
  <vui-auth-card
    style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;"
    elevation="lg"
    heading="$signin.default.title|product:Acme"
    description="$signin.default.description"
    brand-label="$brand.label"
    brand-logo="./verite-elements/assets/logo.svg"
  >
    <vui-placeholder width="64" height="64" slot="logo" style="margin: 20px auto 0 auto"></vui-placeholder>
    <div slot="providers">
      <vui-flex direction="column" gap="2" justify="start" items="stretch" width="full">
        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="apple" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Apple"}'></vui-i18n>
          </vui-flex>
        </vui-button>

        <vui-button class="google-button" variant="outline" style="width: 100%">
          <vui-flex items="center" gap="2">
            <vui-logo name="google" size="20"></vui-logo>
            <vui-i18n text="$signin.with" params='{"provider": "Google"}'></vui-i18n>
          </vui-flex>
        </vui-button>
      </vui-flex>
      <vui-divider orientation="horizontal" style="margin: 16px 0">
        <vui-i18n text="$signin.option"></vui-i18n>
      </vui-divider>
    </div>
    <vui-auth-form
      action="signin"
      display='["email", "password"]'
      submit-label="$authForm.submit"
      password-validation='{"minLength": 8, "requireUppercase": true, "requireLowercase": true, "requireNumbers": true, "requireSpecialChars": true}'
      forgot-password-label="$authForm.forgotPassword"
      onSubmit=\${args.onFormSubmit}
    ></vui-auth-form>
  </vui-auth-card>
</vui-i18n-provider>
  \`
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,T as default};
