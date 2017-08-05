import path from 'path';
import webpackMerge from 'webpack-merge';
import webpackBrowserLib from './webpack.browser.lib';
import webpackNodeLib from './webpack.node.lib';
import webpackNodeCli from './webpack.node.cli';

const baseConfig = {
  output: {
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2016'
          ]
        }
      }
    ]
  },
  devtool: 'sourcemap'
};

const webpackConfigFileArray = [
  webpackBrowserLib,
  webpackNodeLib,
  webpackNodeCli
];

webpackConfigFileArray.forEach((configObject, i) => {
  webpackConfigFileArray[i] = webpackMerge.smart(configObject, baseConfig);
});

module.exports = webpackConfigFileArray;
