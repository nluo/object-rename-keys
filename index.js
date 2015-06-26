var clone = require('clone');

function renameKeys(object, changes){
	if (!changes || typeof changes !== 'object') {
		return object;
	}

	var copy = clone(object);

	for (var key in copy) {
		if (changes.hasOwnProperty(key)) {
			var temp = copy[key];
			copy[changes[key]] = temp;
			delete copy[key];
		}

		if (typeof copy[key] === 'object') {
			copy[key] = renameKeys(copy[key], changes);
		}
	}
	return copy;
}

module.exports = renameKeys;
