const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csso = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = {
    entry:"./src/js/script.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        assetModuleFilename: "img/[name][ext]",

    },
      devServer:{
        static: {

            directory: path.join(__dirname, 'build'),
    
        },
        port:1000,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
      module: { 
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",               
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource'
          },
          {

            test: /\.html$/i,

            loader: 'html-loader',
            

          },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
          
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
        new MiniCssExtractPlugin({
            filename:"css/style.css"
        }),
        new csso({}),
  ],
};