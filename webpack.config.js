var path = require('path');

var webpackConfig = {
  entry: "src/index.js",
  output: {
    path: __dirname + "build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {

    // For nice filetype resolution, ie import 'components/navbar'.
    extensions: ["", ".js", ".jsx"],
    root: __dirname,

    // God help us if someone has required react somewhere down the
    // dependency tree...
    alias: path.join(__dirname, "node_modules/react")
  }
};

module.exports = webpackConfig
