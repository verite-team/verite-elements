# vui-button

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                | Default     |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------- | ----------- |
| `busy`     | `busy`     |             | `boolean`                                                           | `false`     |
| `disabled` | `disabled` |             | `boolean`                                                           | `false`     |
| `form`     | `form`     |             | `string`                                                            | `undefined` |
| `name`     | `name`     |             | `string`                                                            | `undefined` |
| `size`     | `size`     |             | `"default" \| "icon" \| "lg" \| "sm"`                               | `'default'` |
| `type`     | `type`     |             | `"button" \| "reset" \| "submit"`                                   | `'button'`  |
| `value`    | `value`    |             | `string`                                                            | `undefined` |
| `variant`  | `variant`  |             | `"default" \| "destructive" \| "ghost" \| "outline" \| "secondary"` | `'default'` |
| `width`    | `width`    |             | `"auto" \| "full"`                                                  | `'auto'`    |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `buttonClick` |             | `CustomEvent<MouseEvent>` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"button"` |             |


## Dependencies

### Used by

 - [vui-otp](../otp)
 - [vui-signin](../signin)
 - [vui-signup](../signup)
 - [vui-user-menu](../user-menu)

### Graph
```mermaid
graph TD;
  vui-otp --> vui-button
  vui-signin --> vui-button
  vui-signup --> vui-button
  vui-user-menu --> vui-button
  style vui-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
