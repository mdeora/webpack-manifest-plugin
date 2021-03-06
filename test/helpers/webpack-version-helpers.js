const webpack = require('webpack');

const isWebpackVersionGte = (minVersion) =>
  webpack.version && parseInt(webpack.version.slice(0, 1), 10) >= minVersion;

const getAsset = (compilation, assetName) =>
  isWebpackVersionGte(5)
    ? compilation.emittedAssets.has(assetName)
    : compilation.assets[assetName].emitted;

module.exports = { getAsset };
