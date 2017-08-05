const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './cli/index.js',
  target: 'node',
  output: {
    filename: 'cli.js'
  },
  externals: [ nodeExternals() ]
};
