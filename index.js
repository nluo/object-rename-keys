var clone = require('clone');

function renameKeys(object, changes){
	if (!changes || typeof changes !== 'object') {
		return object;
	}

	var copy = clone(object);

	for (var key in changes) {
		if (typeof changes[key] === 'object') {
			if (copy.hasOwnProperty(key)) {
				// traverse again
				copy[key] = renameKeys(copy[key], changes[key]);

				console.log(key, 'and result is ', copy[key]);
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

module.exports = renameKeys;
