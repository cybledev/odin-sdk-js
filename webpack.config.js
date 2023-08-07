const path = require('path');

module.exports = {
  entry: './src/client.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'odin-sdk-javascript.js', 
    library: 'ODIN',
    libraryTarget: 'umd',
  },
};
