const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    //filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // parse css and images to separate folder
    assetModuleFilename: 'css/[hash][ext][query]',
    assetModuleFilename: 'img/[name][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name][ext][query]'
        }
      },
    ],
  },
  mode: 'development'
};