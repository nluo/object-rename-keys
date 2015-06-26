var objectRenameKeys = require('./');

var address = 
{ 	
	display: 'yes',
	streetNumber: '39',
	street: 'Hollywood Street',
	suburb: 'Calamvale',
	state: 'QLD',
	postcode: '4109',
	country: 'AUS' 
};

var changes = {
	streetNumber: 'addressStreetNumber',
	street: 'addressStreet',
	suburb: 'Suburb',
	state: 'State',
	country: 'Country'
}

console.log(objectRenameKeys(address, changes));


// reset the address
address = null;

address = 
{ 	
	display: 'yes',
	streetNumber: '39',
	street: 'Hollywood Street',
	suburb: 'Calamvale',
	state: 'QLD',
	postcode: '4109',
	country: 'AUS' 
};

// It supports nested object too

var property = {};

property.address = address;

console.log(objectRenameKeys(property, changes));