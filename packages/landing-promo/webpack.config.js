const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lingualeo-clone-client",
    projectName: "landing-promo",
    webpackConfigEnv,
    argv,
  });

  const config = {
    externals: [/^@lingualeo-clone-client\/.+/]
  }

  return merge(defaultConfig, {
    ...config
  });
};
