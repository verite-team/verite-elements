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

- [vui-dropdown-menu](../../components/dropdown-menu)
- [vui-dropdown-menu-trigger](../../components/dropdown-menu)
- [vui-button](../../components/button)
- [vui-icon](../../components/icon)
- [vui-dropdown-menu-item](../../components/dropdown-menu)
- [vui-dropdown-menu-separator](../../components/dropdown-menu)

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
