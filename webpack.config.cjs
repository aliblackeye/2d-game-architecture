const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // Girdi dosyası. Bu dosya, Webpack tarafından derleme işlemine başlanacak olan dosyadır.
  entry: "./src/index.ts",

  // Çıktı dosyası. Bu dosya, Webpack tarafından derlenmiş dosyaların birleştirilerek oluşturulacağı dosyadır.
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],

  // Dosya çeşitlerine göre işlem yapılacak olan modüller.
  module: {
    rules: [
      // TypeScript dosyalarını işleyecek olan modül.
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },

      // SCSS dosyalarını işleyecek olan modül.
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/styles"),
      },


    ],
  },

  // TypeScript dosyalarını işleyebilmek için gereken eklentiler.
  resolve: {
    extensions: [".ts", ".js"],
  },

  // Stats yapılandırması
  stats: {
    // Özet bilgi göster
    assets: false,
    children: false,
    modules: false,
    // chunks: false,
    // chunkModules: false,
    // chunkOrigins: false,
    // entrypoints: false,
    // performance: false,
    // publicPath: false,
    // source: false,
    // usedExports: false,
    // warnings: false,
  },
};
