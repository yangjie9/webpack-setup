const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[contenthash:8].bundle.js",
    // package.json 中的
    // "prebuild": "rimraf dist", // 清除dist目录
    clean: true, //每次构建清除dist包
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", "..."], // 可省略后缀
  },
  module: {
    rules: [
      {
        test: /\.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
