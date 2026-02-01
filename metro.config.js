// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Tell Metro that .wasm files are assets (so it can bundle them for web)
config.resolver.assetExts.push("wasm");

module.exports = config;