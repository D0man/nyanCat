const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "./styles/[name].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./app/out.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
          use: [{
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
    ],
  },
  plugins: [
    extractSass
  ]
};
