const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
    entry: './src/index.tsx',
    mode,
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
        },
        {
          test: /\.(tsx|ts)?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Сайт портфолио',
            template: './public/index.html'
        })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
    },
}