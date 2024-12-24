# vui-button

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                           | Default     |
| ---------- | ---------- | ----------- | -------------------------------------------------------------- | ----------- |
| `busy`     | `busy`     |             | `boolean`                                                      | `false`     |
| `disabled` | `disabled` |             | `boolean`                                                      | `false`     |
| `form`     | `form`     |             | `string`                                                       | `undefined` |
| `name`     | `name`     |             | `string`                                                       | `undefined` |
| `size`     | `size`     |             | `"default" \| "icon" \| "lg" \| "sm"`                          | `'default'` |
| `type`     | `type`     |             | `"button" \| "reset" \| "submit"`                              | `'button'`  |
| `value`    | `value`    |             | `string`                                                       | `undefined` |
| `variant`  | `variant`  |             | `"default" \| "destructive" \| "ghost" \| "outline" \| "soft"` | `'default'` |
| `width`    | `width`    |             | `"auto" \| "full"`                                             | `'auto'`    |


## Events

| Event         | Description | Type                             |
| ------------- | ----------- | -------------------------------- |
| `buttonClick` |             | `CustomEvent<ButtonClickDetail>` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"button"` |             |


## Dependencies

### Used by

 - [vui-auth-footer](../auth)
 - [vui-auth-form](../auth)
 - [vui-language-switcher](../i18n)
 - [vui-otp](../../elements/otp)
 - [vui-request](../../elements/request)
 - [vui-theme-toggle](../../elements/theme-toggle)
 - [vui-toast](../../elements/toast)
 - [vui-user-menu](../../elements/user-menu)

### Depends on

- [vui-spinner](../spinner)

### Graph
```mermaid
graph TD;
  vui-button --> vui-spinner
  vui-auth-footer --> vui-button
  vui-auth-form --> vui-button
  vui-language-switcher --> vui-button
  vui-otp --> vui-button
  vui-request --> vui-button
  vui-theme-toggle --> vui-button
  vui-toast --> vui-button
  vui-user-menu --> vui-button
  style vui-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
