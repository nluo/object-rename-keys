function renameKeys(object, changes){
	if (!changes || typeof changes !== 'object') {
		return object;
	}

	for (var key in object) {
		if (changes.hasOwnProperty(key)) {
			var temp = object[key];
			object[changes[key]] = temp;
			delete object[key];
		}

		if (typeof object[key] === 'object') {
			renameKeys(object[key], changes);
		}
	}

	return object

}

module.exports = renameKeys;