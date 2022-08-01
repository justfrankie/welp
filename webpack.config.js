const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './client/src'),
    output: {
      path: path.resolve(__dirname, './client/public'),
      filename: 'bundle.js',
    },
    watch: true,
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js[x]?/,
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', 'ts'],
    }
}