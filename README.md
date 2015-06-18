# What
Rename the selected keys inside the object(and nested object) to the given values

# Get start
Require it:
```
var objectRenameKeys = require('object-rename-keys');
```
and an example object: 

```
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
```
Let's say in your database the names of some fields are different, e.g. addressStreet instead of street, Suburb instead of suburb etc. So you want to change the keys of the object to:

```
var changes = {
	streetNumber: 'addressStreetNumber',
	street: 'addressStreet',
	suburb: 'Suburb',
	state: 'State',
	country: 'Country',
	majiggor: 'hahaha'
}
```
Where as you can see, you define old key value and new key value as key:value in an object (if the key inside the change object does not exist, it will just skip)

```
 {
   oldKeyValue: newKeyValue,
   ....
  }
```
Apply it:

```
var result = objectRenameKeys(address, changes);
console.log(result);
```

will have result output:
```
{
  Country: "AUS",
  State: "QLD",
  Suburb: "Calamvale",
  addressStreet: "Hollywood Street",
  addressStreetNumber: "39",
  display: "yes",
  postcode: "4109"
}
```

It will go through object recurisively, so the if the keys are in the nested object, they will get picked up and changed names too.

```
var property = {};
property.address = address;
console.log(property);
```

```
{
  adress : { 	
  	display: 'yes',
  	streetNumber: '39',
  	street: 'Hollywood Street',
  	suburb: 'Calamvale',
  	state: 'QLD',
  	postcode: '4109',
  	country: 'AUS' 
  }
}

var result = objectRenameKeys(address, changes);
console.log(result);
```
will output:

```
{
  address: 
    {
      Country: "AUS",
      State: "QLD",
      Suburb: "Calamvale",
      addressStreet: "Hollywood Street",
      addressStreetNumber: "39",
      display: "yes",
      postcode: "4109"
    }
}
```
