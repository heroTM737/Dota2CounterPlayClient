var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize: true,
  //     comments: false
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],
  // context: path.join(__dirname, "src"),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['txt', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
