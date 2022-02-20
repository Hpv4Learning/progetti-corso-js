const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    pageOne: "./index.js",
    pageTwo: "./singleDrink.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    sourceMapFilename: "[name].[hash:8].map",
    chunkFilename: "[id].[hash:8].js",
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
      title: "Single Cocktail",
      filename: "drink.html",
      template: "./drink.html",
      chunks: ["pageTwo"],
    }),
    new HtmlWebpackPlugin({
      title: "Cocktail",
      template: "./index.html",
      chunks: ["pageOne"],
    }),
    // new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "./style.css", to: "" }],
    }),
  ],
};
