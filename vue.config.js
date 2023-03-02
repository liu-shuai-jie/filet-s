const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // vue3 vue.config.js
  // 跳过检查host
  // devServer: { disableHostCheck: true },
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
  },
});
