# vui-link

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                         | Default     |
| ---------- | ---------- | ----------- | -------------------------------------------- | ----------- |
| `disabled` | `disabled` |             | `boolean`                                    | `false`     |
| `href`     | `href`     |             | `string`                                     | `undefined` |
| `name`     | `name`     |             | `string`                                     | `undefined` |
| `target`   | `target`   |             | `"_blank" \| "_parent" \| "_self" \| "_top"` | `undefined` |
| `variant`  | `variant`  |             | `"default" \| "destructive" \| "muted"`      | `'default'` |


## Events

| Event       | Description | Type                                                             |
| ----------- | ----------- | ---------------------------------------------------------------- |
| `linkClick` |             | `CustomEvent<CustomEvent<{ name: string; event: MouseEvent; }>>` |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"link"` |             |


## Dependencies

### Used by

 - [vui-auth-form](../auth)

### Graph
```mermaid
graph TD;
  vui-auth-form --> vui-link
  style vui-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
