# vui-toast



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                              | Default          |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| `duration` | `duration` |             | `number`                                                                                          | `4000`           |
| `gap`      | `gap`      |             | `number`                                                                                          | `8`              |
| `position` | `position` |             | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "top-center" \| "top-left" \| "top-right"` | `'bottom-right'` |
| `theme`    | `theme`    |             | `"dark" \| "default" \| "inverted" \| "light"`                                                    | `'default'`      |


## Events

| Event     | Description | Type                  |
| --------- | ----------- | --------------------- |
| `dismiss` |             | `CustomEvent<string>` |


## Methods

### `dismissToast(id: string) => Promise<void>`



#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `id` | `string` |             |

#### Returns

Type: `Promise<void>`



### `show(toast: Omit<ToastProps, 'id'>) => Promise<string>`

Shows a new toast notification

#### Parameters

| Name    | Type                                                                                                                                                                                          | Description                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `toast` | `{ title?: string; type: ToastType; action?: { label: string; onClick: () => void; }; description?: string; duration?: number; dismissible?: boolean; removing?: boolean; isNew?: boolean; }` | - Toast properties without ID |

#### Returns

Type: `Promise<string>`

Generated toast ID

### `update(id: string, toast: Partial<ToastProps>) => Promise<void>`



#### Parameters

| Name    | Type                                                                                                                                                                                                        | Description |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `id`    | `string`                                                                                                                                                                                                    |             |
| `toast` | `{ id?: string; type?: ToastType; title?: string; description?: string; duration?: number; dismissible?: boolean; action?: { label: string; onClick: () => void; }; removing?: boolean; isNew?: boolean; }` |             |

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"toast"` |             |


## Dependencies

### Depends on

- [vui-button](../../components/button)
- [vui-icon](../../components/icon)

### Graph
```mermaid
graph TD;
  vui-toast --> vui-button
  vui-toast --> vui-icon
  vui-button --> vui-spinner
  style vui-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
