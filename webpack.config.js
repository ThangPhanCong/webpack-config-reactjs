const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    filecss: './components/Entry.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 8080,
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    path:__dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project Demo',
    inject: true,
    template: 'public/index.html'
  }),]
}
