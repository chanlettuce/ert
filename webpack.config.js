const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "electron-renderer",
  devtool: "source-map",

  entry: {
    app: "./src"
  },

  // バンドルファイルの出力場所
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/build")
  },

  resolve: {
    modules: [
      // srcディレクトリをimport解決のrootに設定
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        // TypeScript のトランスパイル設定
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },

  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }
  }
};