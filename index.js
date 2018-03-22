'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = require('clone');

function renameKeys(object, changes) {
  if (!changes || (typeof changes === 'undefined' ? 'undefined' : _typeof(changes)) !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    var newArray = [];
    for (var i = 0; i < object.length; i++) {
      newArray.push(renameKeys(object[i], changes));
    }
    return newArray;
  } else {
    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
      return object;
    }
    var copy = clone(object);

    for (var key in changes) {
      if (_typeof(changes[key]) === 'object') {
        if (copy.hasOwnProperty(key)) {
          copy[key] = renameKeys(copy[key], changes[key]);
          continue;
        }
      }

      if (copy.hasOwnProperty(key)) {
        var temp = copy[key];

        copy[changes[key]] = temp;
        delete copy[key];
      }
    }
    return copy;
  }
}

module.exports = renameKeys;
