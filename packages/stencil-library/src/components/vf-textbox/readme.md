# vf-textbox



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type            | Default     |
| -------------- | -------------- | ----------- | --------------- | ----------- |
| `autocomplete` | `autocomplete` |             | `string`        | `undefined` |
| `autocorrect`  | `autocorrect`  |             | `"off" \| "on"` | `undefined` |
| `disabled`     | `disabled`     |             | `boolean`       | `undefined` |
| `name`         | `name`         |             | `string`        | `undefined` |
| `placeholder`  | `placeholder`  |             | `string`        | `undefined` |
| `required`     | `required`     |             | `boolean`       | `undefined` |
| `type`         | `type`         |             | `string`        | `'text'`    |
| `value`        | `value`        |             | `string`        | `''`        |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `enterKey`    |             | `CustomEvent<void>`   |
| `inputChange` |             | `CustomEvent<string>` |
| `valueChange` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [vf-signin](../vf-signin)
 - [vf-signup](../vf-signup)

### Graph
```mermaid
graph TD;
  vf-signin --> vf-textbox
  vf-signup --> vf-textbox
  style vf-textbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*