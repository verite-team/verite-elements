# Stencil Project

```bash
pnpm clean
pnpm install
pnpm build
pnpm react:dev
```

## What should I do first?

### Running stencil standalone

```sh
pnpm dev

# Open
http://localhost:5173/
```

### Running Storybook

```bash
pnpm storybook
```

### Running React Client

```bash
pnpm react:dev
```

## Deep Dive

- [Stencil Starter Kit Readme](./packages/stencil-library/readme.md)

This project is uses

- Stencil 4.x
- Storybook 8.x

Storybook Addons

There are a number of addons that storybook includes by default. These are the addons I have added in addition.

- Actions - https://storybook.js.org/docs/essentials/actions#action-event-handlers
  - Used to watch "events" in Storybook edutir
- CSS Props - https://github.com/ljcl/storybook-addon-cssprops
  - Used to modify CSS props in the Storybook editor

## Storybook

- When running Storybook goto http://localhost:6006/. The `my-component` is the example I have been working with.

### Known issues

- `Sourcemap for "/virtual:/@storybook...`
  - https://oss.issuehunt.io/r/storybookjs/storybook/issues/28567
  - I am pretty certain its a vite issue but its just a warning so ignoring for now

### Awesome components

0 Graphs - https://visa.github.io/visa-chart-components/?path=/story/introduction--page

### Actions

I implemented [Action event handlers](https://storybook.js.org/docs/essentials/actions#action-event-handlers) in the following story:

- [my-component.stories.ts](./packages/stencil-library/src/components/my-component/my-component.stories.ts)

**Example**

```ts
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework'

import { withActions } from '@storybook/addon-actions/decorator'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  decorators: [withActions],
}

export default meta
```

## Turborepo

This project using Turoborepo for the monorepo. [Click here to view readme](README-turborepo.md)
