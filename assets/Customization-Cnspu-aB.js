import{ae as n,af as t}from"./index-C3TpnbGx.js";import{u as o}from"./index-CIan5W2J.js";import"./iframe-C2ehTtFX.js";import"../sb-preview/runtime.js";import"./index-BiL3ubqk.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Customization"}),`
`,n.jsx(e.h1,{id:"customization",children:"Customization"}),`
`,n.jsx(e.h2,{id:"styling-your-components",children:"Styling Your Components"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"Every visual aspect of our components can be customized using CSS variables. Here's a quick example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --vui-primary-color: #0066ff;
  --vui-border-radius: 8px;
  --vui-font-family: 'Inter', sans-serif;
}
`})}),`
`,n.jsx(e.h3,{id:"component-slots",children:"Component Slots"}),`
`,n.jsx(e.p,{children:"Need more control? Use slots to inject custom content:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vui-signin>
  <div slot="header">
    <your-custom-logo />
  </div>
  <div slot="footer">
    <your-terms-and-conditions />
  </div>
</vui-signin>
`})}),`
`,n.jsx(e.h2,{id:"theming-system",children:"Theming System"}),`
`,n.jsx(e.h3,{id:"pre-built-themes",children:"Pre-built Themes"}),`
`,n.jsx(e.p,{children:"Jump-start your design with our included themes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Light/Dark modes"}),`
`,n.jsx(e.li,{children:"Material Design inspired"}),`
`,n.jsx(e.li,{children:"iOS style"}),`
`,n.jsx(e.li,{children:"Enterprise look"}),`
`]}),`
`,n.jsx(e.h3,{id:"creating-custom-themes",children:"Creating Custom Themes"}),`
`,n.jsx(e.p,{children:"Build your own theme by extending our base theme:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.custom-theme {
  --vui-color-scheme: light;
  --vui-primary: #0066ff;
  --vui-secondary: #6c757d;
  --vui-success: #28a745;
  --vui-error: #dc3545;
  /* ... more variables */
}
`})}),`
`,n.jsx(e.h2,{id:"behavioral-customization",children:"Behavioral Customization"}),`
`,n.jsx(e.h3,{id:"event-hooks",children:"Event Hooks"}),`
`,n.jsx(e.p,{children:"Intercept and modify component behavior:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const signin = document.querySelector('vui-signin');
signin.addEventListener('beforeSubmit', (e) => {
  // Add custom validation
  // Modify form data
  // Cancel submission if needed
});
`})}),`
`,n.jsx(e.h3,{id:"validation-rules",children:"Validation Rules"}),`
`,n.jsx(e.p,{children:"Add custom validation rules:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`vuiForm.addValidation('password', {
  custom: (value) => value.length >= 12,
  message: 'Password must be at least 12 characters'
});
`})}),`
`,n.jsx(e.h3,{id:"authentication-flow",children:"Authentication Flow"}),`
`,n.jsx(e.p,{children:"Customize the authentication flow to match your needs:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add extra steps"}),`
`,n.jsx(e.li,{children:"Modify the order of operations"}),`
`,n.jsx(e.li,{children:"Add custom success/error handling"}),`
`,n.jsx(e.li,{children:"Integrate with your backend"}),`
`]})]})}function m(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
