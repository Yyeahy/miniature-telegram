// craco.config.js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 删除默认的 CssMinimizerPlugin
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== "CssMinimizerPlugin"
      );
      return webpackConfig;
    }
  }
};
