# vui-toast



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                              | Default          |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| `position` | `position` |             | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "top-center" \| "top-left" \| "top-right"` | `'bottom-right'` |


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



#### Parameters

| Name    | Type                                                                                                                                                      | Description |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `toast` | `{ title?: string; type?: ToastType; action?: { label: string; onClick: () => void; }; description?: string; duration?: number; dismissible?: boolean; }` |             |

#### Returns

Type: `Promise<string>`



### `update(id: string, toast: Partial<ToastProps>) => Promise<void>`



#### Parameters

| Name    | Type                                                                                                                                                                   | Description |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `id`    | `string`                                                                                                                                                               |             |
| `toast` | `{ id?: string; title?: string; description?: string; type?: ToastType; duration?: number; dismissible?: boolean; action?: { label: string; onClick: () => void; }; }` |             |

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"toast"` |             |


## Dependencies

### Depends on

- [vui-icon](../icon)
- [vui-button](../button)

### Graph
```mermaid
graph TD;
  vui-toast --> vui-icon
  vui-toast --> vui-button
  vui-button --> vui-spinner
  style vui-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
