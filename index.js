'use strict';

var leveldown = require('localstorage-down');
leveldown.adapterName = 'localstorage';
leveldown.valid = function () {
  return 'localStorage' in window;
}
leveldown.usePrefix = true;

module.exports = leveldown;
