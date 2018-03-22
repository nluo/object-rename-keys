var clone = require('clone')

function renameKeys(object, changes) {
  if (!changes || typeof changes !== 'object') {
    return object
  }

  if (Array.isArray(object)) {
    const newArray = []
    for (var i = 0; i< object.length; i++) {
      newArray.push(renameKeys(object[i], changes))
    }
    return newArray
  } else {
    if (typeof object !== 'object') {
      return object
    }
    var copy = clone(object)

    for (var key in changes) {
      if (typeof changes[key] === 'object') {
        if (copy.hasOwnProperty(key)) {
          copy[key] = renameKeys(copy[key], changes[key])
          continue
        }
      }

      if (copy.hasOwnProperty(key)) {
        var temp = copy[key]

        copy[changes[key]] = temp
        delete copy[key]
      }
    }
    return copy
  }
}

module.exports = renameKeys
