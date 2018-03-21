[![Build Status](https://travis-ci.org/nluo/object-rename-keys.svg?branch=master)](https://travis-ci.org/nluo/object-rename-keys)

# What
Returns a copy of the object with keys changed to values defined by a changeMap object. If an array of objects is passed in, then a new array with a copy of the changed object will be returned.

# Quick Reference
## Install

```javascript
yarn add object-rename-keys
//or
npm i --save object-rename-keys
```

## API

Require and use it:
```javascript
var objectRenameKeys = require('object-rename-keys');
objectRenameKeys(object, changesMap);
```

* `object`: the original object
* `changesMap`: the changesMap is the object you defined what keys you would like to change, and the values changed to.

```javascript
changesMap = {
  originalKey: newValue,
  ...
}
```

and an example object:

```javascript
var address = {
  street: 'Hollywood Street',
  suburb: 'Calamvale',
  country: 'AUS'
};
```
Let's say in your database the names of some fields are different, e.g. addressStreet instead of street, Suburb instead of suburb etc. So you want to change the keys of the object to:

```javascript
var changes = {
	street: 'myStreet',
	suburb: 'Suburb'
};
```
Apply it:

```
var result = objectRenameKeys(address, changes);
console.log(result);
```

will have result output:
```javascript
{
  country: "AUS",
  myStreet: "Hollywood Street",
  Suburb: "Calamvale"
}
```

### Nested

It will also go through the object recurisively if you specific the keys in the changesMap in a nested way

```javascript
var addressObject = {
  address: {
    street: 'Hollywood Street',
    suburb: 'Calamvale',
    country: 'AUS'
  }
}
```

```javascript
var changes = {
  address: {
    street: 'myStreet'
  },
  suburb: 'Suburb'
}

var result = objectRenameKeys(addressObject, changes);
console.log(result);
```
will output:

```javascript
{
  address: {
    suburb: 'Calamvale',
    country: 'AUS',
    myStreet: 'Hollywood Street'
  }
}
```

### Array of objects

If an array of objects is passed in, then a new array with a copy of the changed object will be returned.

```javascript
var addressObjs = [
  addressObject,
  {
    suburb: 'Mosman'
  }
]

var changes = {
  address: {
    street: 'myStreet'
  },
  suburb: 'Suburb'
}

var result = objectRenameKeys(addressObjs, changes);
console.log(result);
```
will output:

```javascript
[
  {
    address:
      {
        suburb: 'Calamvale',
        country: 'AUS',
        myStreet: 'Hollywood Street'
      }
  },
  { Suburb: 'Mosman' }
]

```