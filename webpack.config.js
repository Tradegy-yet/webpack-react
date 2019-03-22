const path = require("path");

module.exports = {
  entry: "./ori-js/index.js",
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
