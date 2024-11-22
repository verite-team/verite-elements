# verite-user-menu



<!-- Auto Generated Below -->


## Events

| Event        | Description | Type                                               |
| ------------ | ----------- | -------------------------------------------------- |
| `menuAction` |             | `CustomEvent<"logout" \| "profile" \| "settings">` |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"button"`    |             |
| `"item-icon"` |             |
| `"item-text"` |             |
| `"menu"`      |             |
| `"menu-item"` |             |
| `"separator"` |             |
| `"trigger"`   |             |
| `"user-icon"` |             |


## Dependencies

### Depends on

- [vui-dropdown-menu](../dropdown-menu)
- [vui-dropdown-menu-trigger](../dropdown-menu)
- [vui-button](../button)
- [vui-icon](../icon)
- [vui-dropdown-menu-item](../dropdown-menu)
- [vui-dropdown-menu-separator](../dropdown-menu)

### Graph
```mermaid
graph TD;
  vui-user-menu --> vui-dropdown-menu
  vui-user-menu --> vui-dropdown-menu-trigger
  vui-user-menu --> vui-button
  vui-user-menu --> vui-icon
  vui-user-menu --> vui-dropdown-menu-item
  vui-user-menu --> vui-dropdown-menu-separator
  vui-dropdown-menu --> vui-dropdown-menu-content
  vui-button --> vui-spinner
  style vui-user-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
