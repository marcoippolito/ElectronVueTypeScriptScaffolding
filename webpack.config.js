import 'script-loader!./script.js';
import webpack from 'webpack';

const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: ['electron-renderer', 'electron-main', 'electron-preload'],
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: config => {
        config.resolve.alias.set('jsbi', path.join(__dirname, 'node_modules/jsbi/dist/jsbi-cjs.js'));
      }
    },
  },
};


module.exports = {
  entry: './src/background.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  }
}

// https://carloslevir.com/aplicacao-desktop-react-electron/

module.exports = config => {
  config.target = "electron-renderer";
  return config;
};

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'source', to: 'dest' },
        { from: 'other', to: 'public' },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
