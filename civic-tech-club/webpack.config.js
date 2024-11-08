const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "frontend/src", "main.jsx"),
    output: {
      filename: 'bundle.js',
      path:path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "frontend/src", "index.html"),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'], // Resolve .js and .jsx extensions
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/, // This matches both .js and .jsx files
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/, // Match image files
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[hash].[ext]', // Output naming pattern
                  outputPath: 'assets/', // Directory to output the files
                },
              },
            ],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[hash].[ext]', // Output naming pattern
                  outputPath: 'fonts/', // Directory to output font files
                },
              },
            ],
          },
          {
            test: /\.json$/,
            type: 'asset/resource', // Webpack 5 asset modules
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',  // Customize the output name
                outputPath: 'data/',         // Copy to the 'data' folder
              },
            },
          },
        ]
      },
  devServer: {
    port: 3000,
  },
};