const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
   entry: `${path.join(__dirname, '/client/src')}/index.jsx`,
   output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            //enables webpack to handle jsx files
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            //enables webpack to handle images
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Frontend Capstone',
         template: 'template.html',
      }),
      new MiniCssExtractPlugin(),
      //! uncomment this line to visualize webpack bundles in browser
      // new BundleAnalyzerPlugin(),
   ],
};
