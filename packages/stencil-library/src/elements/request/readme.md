# vui-request



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                 | Default     |
| -------------- | --------------- | ----------- | -------------------- | ----------- |
| `application`  | `application`   |             | `string`             | `undefined` |
| `isLoading`    | `is-loading`    |             | `boolean`            | `undefined` |
| `permissions`  | `permissions`   |             | `string \| string[]` | `[]`        |
| `redirectUri`  | `redirect-uri`  |             | `string`             | `undefined` |
| `showRedirect` | `show-redirect` |             | `boolean`            | `true`      |


## Events

| Event            | Description | Type                |
| ---------------- | ----------- | ------------------- |
| `requestApprove` |             | `CustomEvent<void>` |
| `requestDeny`    |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [vui-auth-header](../../components/auth)
- [vui-button](../../components/button)

### Graph
```mermaid
graph TD;
  vui-request --> vui-auth-header
  vui-request --> vui-button
  vui-auth-header --> vui-card-header
  vui-auth-header --> vui-card-title
  vui-auth-header --> vui-card-description
  vui-button --> vui-spinner
  style vui-request fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
