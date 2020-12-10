const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");

exports.chainWebpack = webpackConfig => {
  if (!process.env.SSR) {
    // This is required for repl.it to play nicely with the Dev Server
    webpackConfig.devServer.disableHostCheck(true);
    return;
  }
  console.log('process.env.SSR', process.env.SSR)
  // console.log('webpackConfig.entry', webpackConfig.entry)
  // console.log('webpackConfig', webpackConfig)
  webpackConfig
    .entry("app")
    .clear()
    .add("./src/main.server.js");

  webpackConfig.target("node");
  webpackConfig.output.libraryTarget("commonjs2");

  webpackConfig
    .plugin("manifest")
    .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));

  webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

  webpackConfig.optimization.splitChunks(false).minimize(false);

  webpackConfig.plugins.delete("hmr");
  webpackConfig.plugins.delete("preload");
  webpackConfig.plugins.delete("prefetch");
  webpackConfig.plugins.delete("progress");
  webpackConfig.plugins.delete("friendly-errors");

  // console.log(webpackConfig.toConfig())
};
