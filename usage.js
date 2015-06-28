var objectRenameKeys = require('./');

var majigger = {
    address:
	{
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

console.log(objectRenameKeys(majigger, changes));
