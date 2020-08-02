const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
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
            publicPath: "../dist/images",
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
};
