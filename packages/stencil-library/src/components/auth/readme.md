# vui-auth-header



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                           | Default     |
| ------------- | ------------- | ----------- | ------------------------------ | ----------- |
| `align`       | `align`       |             | `"center" \| "end" \| "start"` | `'center'`  |
| `description` | `description` |             | `string`                       | `undefined` |
| `heading`     | `heading`     |             | `string`                       | `undefined` |
| `size`        | `size`        |             | `"lg" \| "md" \| "sm" \| "xl"` | `'md'`      |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"header"` |             |


## Dependencies

### Used by

 - [vui-auth-alt-card](.)
 - [vui-auth-card](.)
 - [vui-request](../request)

### Depends on

- [vui-card-header](../card)
- [vui-card-title](../card)
- [vui-card-description](../card)

### Graph
```mermaid
graph TD;
  vui-auth-header --> vui-card-header
  vui-auth-header --> vui-card-title
  vui-auth-header --> vui-card-description
  vui-auth-alt-card --> vui-auth-header
  vui-auth-card --> vui-auth-header
  vui-request --> vui-auth-header
  style vui-auth-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
