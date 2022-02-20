const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          { loader: "style-loader" },

          {
            loader: "css-loader",
            options: { url: true, import: true, modules: true },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  optimization: {
    // minimizer: [new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Random User",
      template: "./index.html",
    }),
    // new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "./style.css", to: "" }],
    }),
  ],
};
