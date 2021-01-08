# Bootstrap 4 Customize

![](https://i.imgur.com/lP5rAWh.png)

1. Download and Find the `scss` folder from the source files of Bootstrap 4 `https://getbootstrap.com/docs/4.5/getting-started/download/`, then move `scss` folder to this project folder.

2. Replace the `<link>` tag with href attribute `[bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css)` to customized `./scss/bootstrap.css`.

3. Create a `_vars.scss` in `scss` folder, import `_vars.scss` in `bootstrap.scss`, then change the colors of Bootstrap to:

```
primary: #8e43e7
secondary: #002663
success: #49a942
warning: #ff9900
danger: #ff4f81
info: #3369e7
dark: #222
```

4. In `_vars.scss`, Set the `$carousel-control-color` to `$danger` color, set `$carousel-indicator-active-bg` to `$warning` color and set `$carousel-indicator-height` to `10px`.


5. There are many variables in Bootstrap's scss source code. Use `Ctrl + F` to search for variables related to Navbar Component, then change the hover text color for links in `Dark Theme Navbar` to `$warning` and change the hover text color for links in `Light Theme Navbar` to `$primary`.