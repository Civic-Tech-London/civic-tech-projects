const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
            test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,  // File extensions for images
            type: 'asset/resource', // You can use 'file-loader' here, but `asset/resource` is recommended for Webpack 5
            generator: {
              filename: 'images/[name].[hash][ext][query]', // Output folder structure
            },
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
            loader: 'json-loader',
            type: 'javascript/auto', // Ensures compatibility with webpack 4 and above
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'frontend/public/index.html', // Template HTML file
          filename: 'index.html', // Output HTML file
        }),
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom',
        }),
      ],
      devServer: {
        static: path.join(__dirname, 'dist'), // Serve files from the "dist" directory
        port: 3000, // Set the development server port
        hot: true, // Enable Hot Module Replacement
        open: true, // Automatically open the browser
        historyApiFallback: true, // For SPA routing (React Router, etc.)
        compress: true, // Enable gzip compression
        watchFiles: ['src/**/*', 'public/**/*'], // Watch files for changes
      },
      mode: 'development', //
};