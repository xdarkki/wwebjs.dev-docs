/*import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
*/

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "whatsapp-web.js",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/logo_favicon_32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/logo_favicon_16x16.png" }],
    ["link", { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/logo_favicon_shortcut.ico' }],
    ["meta", { name: "theme-color", content: "#25D366" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "pedroslopez/whatsapp-web.js",
    docsRepo: "wwebjs/wwebjs.dev",
    docsBranch: "main",
    editLinks: true,
    docsDir: "src",
    lastUpdated: "Last Updated",
    sidebarDepth: 3,
    nav: require("./config/navbar"),
    sidebar: require("./config/sidebar"),
    yuu: require("./config/yuu"),

  },
  theme: "yuu",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "vuepress-plugin-code-copy",
      {
        align: "bottom",
        color: "#42b983",
        backgroundColor: "#42b983",
      },
    ],
  ],
};