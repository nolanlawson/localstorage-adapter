'use strict';

var adapter = require('localstorage-down');
adapter.adapterName = 'localstorage';
adapter.valid = function () {
  return 'localStorage' in window;
}
adapter.usePrefix = true;

module.exports = adapter;
