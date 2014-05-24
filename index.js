'use strict';

var adapter = require('pouchdb-abstract-adapter');

var leveldown = require('localstorage-down');
leveldown.adapterName = 'localstorage';
leveldown.valid = function () {
  return 'localStorage' in window;
}
leveldown.usePrefix = true;

module.exports = adapter(leveldown);
