module.exports = {
  "stories": [
    "../components/stories/**/*.stories.mdx",
    "../components/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
