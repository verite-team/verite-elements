import{ae as e,af as r}from"./index-C7B-pu6f.js";import{u as i}from"./index-BrYv1I7r.js";import"./iframe-UPcROoWa.js";import"../sb-preview/runtime.js";import"./index-BiL3ubqk.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Contributing"}),`
`,e.jsx(n.h1,{id:"contributing-to-verite-elements",children:"Contributing to Verite Elements"}),`
`,e.jsx(n.p,{children:"We love your input! We want to make contributing to Verite Elements as easy and transparent as possible, whether it's:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reporting a bug"}),`
`,e.jsx(n.li,{children:"Discussing the current state of the code"}),`
`,e.jsx(n.li,{children:"Submitting a fix"}),`
`,e.jsx(n.li,{children:"Proposing new features"}),`
`,e.jsx(n.li,{children:"Becoming a maintainer"}),`
`]}),`
`,e.jsx(n.h2,{id:"development-process",children:"Development Process"}),`
`,e.jsx(n.p,{children:"We use GitHub to host code, to track issues and feature requests, as well as accept pull requests."}),`
`,e.jsx(n.h3,{id:"pull-requests",children:"Pull Requests"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Fork the repo and create your branch from ",e.jsx(n.code,{children:"main"})]}),`
`,e.jsx(n.li,{children:"If you've added code that should be tested, add tests"}),`
`,e.jsx(n.li,{children:"If you've changed APIs, update the documentation"}),`
`,e.jsx(n.li,{children:"Ensure the test suite passes"}),`
`,e.jsx(n.li,{children:"Make sure your code lints"}),`
`,e.jsx(n.li,{children:"Issue that pull request!"}),`
`]}),`
`,e.jsx(n.h2,{id:"local-development-setup",children:"Local Development Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Clone the repository
git clone https://github.com/verite/elements.git
cd elements

# Install dependencies
npm install

# Start the development environment
npm run dev
`})}),`
`,e.jsx(n.p,{children:"This will start:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Storybook for component development"}),`
`,e.jsx(n.li,{children:"Watch mode for TypeScript compilation"}),`
`,e.jsx(n.li,{children:"Test runner in watch mode"}),`
`]}),`
`,e.jsx(n.h2,{id:"project-structure",children:"Project Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`packages/
  stencil-library/      # Core web components
  react-library/        # React wrapper components
  vue-library/          # Vue wrapper components
  docs/                 # Documentation site
`})}),`
`,e.jsx(n.h2,{id:"writing-components",children:"Writing Components"}),`
`,e.jsx(n.h3,{id:"component-checklist",children:"Component Checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[ ] TypeScript types"}),`
`,e.jsx(n.li,{children:"[ ] Unit tests"}),`
`,e.jsx(n.li,{children:"[ ] Storybook stories"}),`
`,e.jsx(n.li,{children:"[ ] Documentation"}),`
`,e.jsx(n.li,{children:"[ ] Accessibility tests"}),`
`,e.jsx(n.li,{children:"[ ] Performance tests"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-component",children:"Example Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vui-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  
  render() {
    return (
      <button class={\`btn btn-\${this.variant}\`}>
        <slot></slot>
      </button>
    );
  }
}
`})}),`
`,e.jsx(n.h2,{id:"code-style",children:"Code Style"}),`
`,e.jsx(n.p,{children:"We use:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prettier for formatting"}),`
`,e.jsx(n.li,{children:"ESLint for linting"}),`
`,e.jsx(n.li,{children:"Conventional Commits for commit messages"}),`
`]}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e
`})}),`
`,`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsx(n.p,{children:"By contributing, you agree that your contributions will be licensed under the MIT License."})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
