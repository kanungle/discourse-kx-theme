
# Discourse KX Theme

This is a custom Discourse theme designed for KX-branded styling, with a focus on a sleek, dark user interface. It includes support for both dark and light themes, controlled by a configurable setting.

## 🌙 Default Dark Theme

By default, the theme applies a **dark color scheme** to enhance readability and reduce eye strain in low-light environments.

## 🧩 Features

- **Dark theme default**
- **Optional light theme support** via SCSS toggle
- **Configurable `use_dark_theme` setting** through Discourse UI
- **Easy flag to enable automatic switching based on system preference** (disabled by default)
- Custom color schemes defined in `about.json`
- Responsive styles with SCSS
- JavaScript initializer for applying theme classes

## ⚙️ Theme Settings

| Setting            | Type    | Default | Description                         |
|--------------------|---------|---------|-------------------------------------|
| `use_dark_theme`   | Boolean | `true`  | Use dark theme if enabled           |

## 🔄 Automatic System Preference Switching

To enable automatic light/dark switching based on user system preferences, edit the flag in the file:

```
javascripts/discourse/initializers/kx-theme-toggle.js.es6
```

Set this line to `true`:

```js
const ENABLE_AUTO_THEME_SWITCH = true;
```

This will use the browser's `prefers-color-scheme` media query to determine theme preference.

## 📁 File Structure

```
.
├── about.json                        # Theme metadata and color schemes
├── stylesheets/
│   └── common.scss                  # SCSS with light/dark theme logic
└── javascripts/
    └── discourse/
        └── initializers/
            └── kx-theme-toggle.js.es6  # Theme application logic
```

## 📦 Installation

To use this theme:

1. Download the ZIP file or clone this repo.
2. Upload to your Discourse instance via **Admin > Customize > Themes > Install > From your computer**.
3. Enable the theme and configure `use_dark_theme` as needed.

## 📝 License

This theme is customized for KX and follows the usage guidelines set by Discourse. Refer to the Discourse [theme guide](https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966) for more help.

---

Maintained by [kanungle](https://github.com/kanungle)
