const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  webpack(config, options) {
    // Further custom configuration here
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: "[name].[ext]"
      }
    });
    return config;
  }
});
