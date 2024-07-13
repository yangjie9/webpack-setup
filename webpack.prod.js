const { merge } = require("webpack-merge");
const { ids } = require("webpack");
const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
  plugins: [new ids.HashedModuleIdsPlugin()],
};

module.exports = merge(common, prodConfig);
