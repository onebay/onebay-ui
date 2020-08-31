const path = require('path');
console.log('path :>> ', path.resolve(__dirname, '../swift-ui'));
module.exports = {
  alias: {
    '/@/swift-ui/': path.resolve(__dirname, '../swift-ui'),
  }
};