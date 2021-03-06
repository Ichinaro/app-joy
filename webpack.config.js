const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("dotenv").config();

const isDev = process.env.ENV === "development";
const entry = ["./src/frontend/index.js"];

if (isDev) {
  entry.push(
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true"
  );
}

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, "src/server/public"),
    filename: isDev ? "assets/app.js" : "assets/app-[contenthash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true, //permite reutilizar chunks existentes
          priority: 1, //tipo de prioridad 1 MAXIMA
          filename: isDev
            ? "assets/vendor.js"
            : "assets/vendor-[contenthash].js",
          enforce: true, // en caso de error detener proceso
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev
      ? () => {}
      : new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: path.resolve(
            __dirname,
            "src/server/public"
          ),
        }),
    isDev
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.js$|\.css$/, //indica las extensiones de los assets a comprimir con .gz
          filename: "[path][base].gz", //indica el nombre del archivo de salida: "assets/app.js" y "assets/app.css"
        }),
    isDev ? () => {} : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? "assets/app.css" : "assets/app-[contenthash].css",
    }),
  ],
};
