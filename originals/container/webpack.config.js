const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 300, // Delay the rebuild after the first change (in ms)
    poll: 1000, // Check for changes every second
    ignored: /node_modules/, // Ignore files in node_modules
  },
  mode: "development",
  devServer: {
    port: 8079,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        account: "account@http://localhost:8082/remoteEntry.js",
        cart: "cart@http://localhost:8083/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
