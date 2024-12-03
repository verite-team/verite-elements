import{ae as e,af as r}from"./index-BA7zSGmS.js";import{u as s}from"./index-DCJKTJXR.js";import"./iframe-B5UYubIh.js";import"../sb-preview/runtime.js";import"./index-BiL3ubqk.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction"}),`
`,e.jsx("span",{className:"badge",children:"Pre-Alpha"}),`
`,e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:"Welcome to Verite Elements — a robust library of web components designed to simplify authentication UI development. Built with Stencil.js, our components help developers implement secure, accessible, and customizable authentication flows with minimal effort."}),`
`,e.jsx(n.h2,{id:"what-is-verite-elements",children:"What is Verite Elements?"}),`
`,e.jsx(n.p,{children:"Verite Elements provides framework-agnostic web components focused on authentication interfaces. Our library excels at three core areas:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Authentication UI Components:"})," Pre-built, customizable components for sign-in, sign-up, and one-time password flows"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built-in Form Validation:"})," Robust client-side validation with customizable rules and error messages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event System:"})," Rich event system for tracking authentication flows and user interactions"]}),`
`]}),`
`,e.jsx(n.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework Agnostic:"})," Works seamlessly with React, Vue, Angular, or vanilla JavaScript"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zero Dependencies:"})," Lightweight and conflict-free - just what you need"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Developer Experience:"})," TypeScript support, extensive documentation, and predictable APIs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enterprise Ready:"})," Accessibility compliant, RTL support, and built-in localization"]}),`
`]}),`
`,e.jsx(n.h2,{id:"quick-example",children:"Quick Example"}),`
`,e.jsx(n.p,{children:"Here's a simple example of implementing a sign-in form:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vui-i18n-provider locale="en">
  <vui-auth-form
    action="signin"
    elements='["email", "password"]'
    submit-label="$authForm.submit"
    forgot-password-label="$authForm.forgotPassword"
  ></vui-auth-form>
</vui-i18n-provider>
`})}),`
`,e.jsxs(n.p,{children:["Ready to get started? Check out our ",e.jsx(n.a,{href:"/docs/getting-started",children:"Getting Started"})," guide or explore our ",e.jsx(n.a,{href:"/docs/components",children:"Components"})," documentation."]})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{u as default};
