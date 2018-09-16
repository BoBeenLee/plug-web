const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, 'src'),
  ];
  config.resolve.plugins = [
    ...(config.resolve.plugins || []),
    new TsconfigPathsPlugin({})
  ];
  return config;
};
