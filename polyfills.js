// Polyfills for Three.js in React Native
global.self = global;
global.window = global;
global.document = {
  createElement: () => ({}),
  createElementNS: () => ({}),
};
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'ReactNative';

// Blob polyfill
if (typeof Blob === 'undefined') {
  global.Blob = class Blob {
    constructor() {}
  };
}

// URL polyfill
if (typeof URL === 'undefined') {
  global.URL = {
    createObjectURL: () => '',
    revokeObjectURL: () => {},
  };
}
