const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry file
  output: {
    filename: 'bundle.js',  // The output bundle file
    path: path.resolve(__dirname, 'dist')  // Output directory
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
    }
  },
  // Other Webpack configurations
};
