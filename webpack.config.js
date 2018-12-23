const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
}

// const path = require('path');
// module.exports = {
//   entry: path.resolve(__dirname, './client/index.jsx'),
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, './public/'),
  // },
//   mode: 'development',
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,

//         include: path.resolve(__dirname, './client/src/components'),
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         },
//       }
//     ],
//   }
// };