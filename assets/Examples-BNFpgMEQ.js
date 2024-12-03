import{ae as n,af as r}from"./index-BA7zSGmS.js";import{u as t}from"./index-DCJKTJXR.js";import"./iframe-B5UYubIh.js";import"../sb-preview/runtime.js";import"./index-BiL3ubqk.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Examples"}),`
`,n.jsx(e.h1,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h2,{id:"basic-authentication",children:"Basic Authentication"}),`
`,n.jsx(e.h3,{id:"simple-sign-in",children:"Simple Sign In"}),`
`,n.jsx(e.p,{children:"The most straightforward way to add authentication to your app:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-signin
  provider="email"
  onSuccess={(user) => console.log('Signed in:', user)}
></vui-signin>
`})}),`
`,n.jsx(e.h3,{id:"social-authentication",children:"Social Authentication"}),`
`,n.jsx(e.p,{children:"Implement social login with minimal setup:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-social-auth
  providers={['google', 'github', 'twitter']}
  layout="buttons"
></vui-social-auth>
`})}),`
`,n.jsx(e.h2,{id:"advanced-patterns",children:"Advanced Patterns"}),`
`,n.jsx(e.h3,{id:"multi-step-registration",children:"Multi-step Registration"}),`
`,n.jsx(e.p,{children:"Create a smooth multi-step signup flow:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-multi-step-form>
  <vui-step name="basics">
    <vui-signup-basics></vui-signup-basics>
  </vui-step>
  <vui-step name="verification">
    <vui-email-verification></vui-email-verification>
  </vui-step>
  <vui-step name="complete">
    <vui-welcome></vui-welcome>
  </vui-step>
</vui-multi-step-form>
`})}),`
`,n.jsx(e.h3,{id:"password-less-authentication",children:"Password-less Authentication"}),`
`,n.jsx(e.p,{children:"Implement modern authentication without passwords:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-magic-link
  redirect-url="/dashboard"
  email-template="welcome"
></vui-magic-link>
`})}),`
`,n.jsx(e.h2,{id:"real-world-solutions",children:"Real-world Solutions"}),`
`,n.jsx(e.h3,{id:"enterprise-sso",children:"Enterprise SSO"}),`
`,n.jsx(e.p,{children:"Connect with your organization's identity provider:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-enterprise-auth
  providers={['okta', 'azure-ad']}
  domain="company.com"
></vui-enterprise-auth>
`})}),`
`,n.jsx(e.h3,{id:"compliance-ready-forms",children:"Compliance-ready Forms"}),`
`,n.jsx(e.p,{children:"GDPR and CCPA compliant registration:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-signup
  require-consent
  privacy-policy-url="/privacy"
  terms-url="/terms"
></vui-signup>
`})}),`
`,n.jsxs(e.p,{children:["Check out our ",n.jsx(e.a,{href:"/docs/storybook",children:"Storybook"})," for more examples and live demos."]})]})}function m(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
