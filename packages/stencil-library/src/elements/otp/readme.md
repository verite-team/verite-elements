# verite-otp

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default |
| ------------- | -------------- | ----------- | -------- | ------- |
| `submitLabel` | `submit-label` |             | `string` | `''`    |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `formSubmit` |             | `CustomEvent<string>` |


## Shadow Parts

| Part    | Description |
| ------- | ----------- |
| `"otp"` |             |


## Dependencies

### Depends on

- [vui-flex](../../components/flex)
- [vui-textbox](../../components/textbox)
- [vui-button](../../components/button)

### Graph
```mermaid
graph TD;
  vui-otp --> vui-flex
  vui-otp --> vui-textbox
  vui-otp --> vui-button
  vui-button --> vui-spinner
  style vui-otp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
