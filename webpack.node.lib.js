const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'node.lib.js'
  },
  externals: [ nodeExternals() ]
};
