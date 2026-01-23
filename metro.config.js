const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add GLB to asset extensions
config.resolver.assetExts.push('glb', 'gltf', 'bin', 'obj', 'mtl');

// Add source extensions for Three.js
config.resolver.sourceExts.push('cjs');

module.exports = config;
