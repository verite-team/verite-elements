# vui-form-control



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type     | Default     |
| -------------- | --------------- | ----------- | -------- | ----------- |
| `errorMessage` | `error-message` |             | `string` | `undefined` |
| `htmlFor`      | `html-for`      |             | `string` | `undefined` |
| `label`        | `label`         |             | `string` | `undefined` |


## Dependencies

### Used by

 - [vui-auth-form](../auth)

### Depends on

- [vui-error-message](.)

### Graph
```mermaid
graph TD;
  vui-form-input --> vui-error-message
  vui-error-message --> vui-icon
  vui-auth-form --> vui-form-input
  style vui-form-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
