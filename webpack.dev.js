const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    compress: false, // 是否开启 gzip 压缩
    historyApiFallback: true,
  },
});
