const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
}