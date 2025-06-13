
import { withPluginApi } from "discourse/lib/plugin-api";

// Toggle this flag to enable system preference auto-detection in future
const ENABLE_AUTO_THEME_SWITCH = false;

export default {
  name: "kx-theme-toggle",

  initialize() {
    withPluginApi("0.8.7", api => {
      const siteSettings = api.container.lookup("site-settings:main");

      let useDark = siteSettings.use_dark_theme;

      if (ENABLE_AUTO_THEME_SWITCH) {
        const prefersDark = window.matchMedia &&
                            window.matchMedia("(prefers-color-scheme: dark)").matches;
        useDark = prefersDark;
      }

      if (useDark) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    });
  }
};
