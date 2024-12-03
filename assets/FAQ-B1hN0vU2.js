import{ae as e,af as t}from"./index-BA7zSGmS.js";import{u as s}from"./index-DCJKTJXR.js";import"./iframe-B5UYubIh.js";import"../sb-preview/runtime.js";import"./index-BiL3ubqk.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"FAQ"}),`
`,e.jsx(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),`
`,e.jsx(n.h2,{id:"general-questions",children:"General Questions"}),`
`,e.jsx(n.h3,{id:"what-makes-verite-elements-different-from-other-auth-ui-libraries",children:"What makes Verite Elements different from other auth UI libraries?"}),`
`,e.jsx(n.p,{children:"Unlike most auth UI libraries that are framework-specific, Verite Elements uses web components, making it truly framework-agnostic. You can use it with any JavaScript framework or vanilla JS, and it won't conflict with your existing components."}),`
`,e.jsx(n.h3,{id:"do-i-need-to-use-a-specific-backend",children:"Do I need to use a specific backend?"}),`
`,e.jsx(n.p,{children:"No! While we provide easy integration with popular auth providers (Auth0, Firebase, etc.), you can use any backend. Our components emit standard events that you can handle however you need."}),`
`,e.jsx(n.h3,{id:"whats-the-browser-support-like",children:"What's the browser support like?"}),`
`,e.jsx(n.p,{children:"We support all modern browsers (Chrome, Firefox, Safari, Edge). For older browsers, we recommend using our polyfill bundle, though this is rarely needed as web components are now widely supported."}),`
`,e.jsx(n.h2,{id:"technical-questions",children:"Technical Questions"}),`
`,e.jsx(n.h3,{id:"can-i-use-this-with-server-side-rendering-ssr",children:"Can I use this with Server-Side Rendering (SSR)?"}),`
`,e.jsx(n.p,{children:"Yes! We're fully compatible with SSR frameworks like Next.js, Nuxt, and others. Our components hydrate properly and avoid the dreaded flash of unstyled content (FOUC)."}),`
`,e.jsx(n.h3,{id:"how-do-i-handle-form-submission",children:"How do I handle form submission?"}),`
`,e.jsx(n.p,{children:"Our components emit standard events that you can listen for:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const form = document.querySelector('vui-signin');
form.addEventListener('submit', async (e) => {
  const formData = e.detail;
  // Handle submission
});
`})}),`
`,e.jsx(n.h3,{id:"can-i-customize-the-validation-rules",children:"Can I customize the validation rules?"}),`
`,e.jsx(n.p,{children:"Absolutely! While we provide sensible defaults, you can override or add custom validation rules:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const form = document.querySelector('vui-form');
form.validationRules = {
  password: [
    {
      validate: (value) => value.length >= 10,
      message: 'Password must be at least 10 characters'
    }
  ]
};
`})}),`
`,e.jsx(n.h2,{id:"styling--customization",children:"Styling & Customization"}),`
`,e.jsx(n.h3,{id:"can-i-use-my-own-css-framework",children:"Can I use my own CSS framework?"}),`
`,e.jsx(n.p,{children:"Yes! Our components use CSS custom properties (variables) for styling, making them easy to theme. They won't conflict with Bootstrap, Tailwind, or other CSS frameworks."}),`
`,e.jsx(n.h3,{id:"how-do-i-create-a-dark-theme",children:"How do I create a dark theme?"}),`
`,e.jsx(n.p,{children:"We provide a built-in dark theme, but you can also create your own:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`[data-theme="dark"] {
  --vui-background: #1a1a1a;
  --vui-text: #ffffff;
  /* other variables */
}
`})}),`
`,e.jsx(n.h2,{id:"performance--security",children:"Performance & Security"}),`
`,e.jsx(n.h3,{id:"whats-the-bundle-size-impact",children:"What's the bundle size impact?"}),`
`,e.jsx(n.p,{children:"Our core bundle is around 12KB gzipped. Components are loaded on-demand, so you only pay for what you use."}),`
`,e.jsx(n.h3,{id:"how-do-you-handle-security",children:"How do you handle security?"}),`
`,e.jsx(n.p,{children:"We follow security best practices including:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"CSRF protection"}),`
`,e.jsx(n.li,{children:"XSS prevention"}),`
`,e.jsx(n.li,{children:"Input sanitization"}),`
`,e.jsx(n.li,{children:"Secure defaults"}),`
`,e.jsx(n.li,{children:"Regular security audits"}),`
`]}),`
`,e.jsx(n.h3,{id:"is-there-a-performance-impact",children:"Is there a performance impact?"}),`
`,e.jsx(n.p,{children:"Web components are lightweight and run close to the metal. Our components are tree-shakeable and lazy-loaded, so they won't impact your initial page load."}),`
`,e.jsx(n.h2,{id:"support--troubleshooting",children:"Support & Troubleshooting"}),`
`,e.jsx(n.h3,{id:"where-can-i-get-help",children:"Where can I get help?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Check our ",e.jsx(n.a,{href:"/docs",children:"documentation"})]}),`
`]}),`
`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Open an issue on ",e.jsx(n.a,{href:"https://github.com/verite/elements",rel:"nofollow",children:"GitHub"})]}),`
`,e.jsx(n.li,{children:"Email support at support@verite.dev"}),`
`]}),`
`,e.jsx(n.h3,{id:"found-a-bug",children:"Found a bug?"}),`
`,e.jsxs(n.p,{children:["Please report it on our ",e.jsx(n.a,{href:"https://github.com/verite/elements/issues",rel:"nofollow",children:"GitHub Issues"})," page with:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A minimal reproduction"}),`
`,e.jsx(n.li,{children:"Browser/device information"}),`
`,e.jsx(n.li,{children:"Expected vs actual behavior"}),`
`]})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{m as default};
