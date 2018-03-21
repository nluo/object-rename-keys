var objectRenameKeys = require('./');

var object = {
	address: {
		street: 'Hollywood Street',
		suburb: 'Calamvale',
		country: 'AUS'
	}
};

var changes = {
	address: {
		street: 'myStreet'
	},
	suburb: 'Suburb'
};

console.log(objectRenameKeys(object, changes));

// Arrays of objects
var objects = [
  object,
  {
    suburb: 'Mosman'
  }
]

console.log('Array of objects, results is ', objectRenameKeys(objects, changes))