const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",

  entry:{'index': "./src/index.js"},

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(txt|md)$/,
        use: "raw-loader",
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // outputPath 还是相对于全局的 outputPath
            outputPath: "./images",
            // 一个资源的 url 并不等同与资源的绝对存储路径
            // 打包后文件的 url
            publicPath: "./images",
            // 小于 100 字节转成 base64 格式
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          {
loader:MiniCssExtractPlugin
          },
          {
            loader: "css-loader",
            options: {
              // 启用/禁用 url() 处理
              url: true,
              // 启用/禁用 @import 处理
              import: true,
              // 启用/禁用 Sourcemap
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '欢迎来到开课吧',
      template: "./template/index.html",
      //生成的文件 filename输出的目录相对于  output中的Path:
      filename: "index.html",
    }),

    // new CleanWebpackPlugin()

    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  devServer: {
    // 生成的虚拟目录路径
    contentBase: "./dist",
    // 自动开启浏览器
    open: true,
    // 端口
    port: 8081,
  },
};
