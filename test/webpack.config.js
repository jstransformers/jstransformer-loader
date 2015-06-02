// webpack configuration
// http://webpack.github.io/docs/configuration.html

// Compile test.js into index.js
module.exports = {
  context: __dirname,
  entry: "./test",
  bail: true,
  output: {
    path: __dirname,
    filename: "index.js"
  },
  target: "node"
};
