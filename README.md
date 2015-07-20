[![Build Status](https://travis-ci.org/nluo/object-rename-keys.svg?branch=master)](https://travis-ci.org/nluo/object-rename-keys)

# What
Returns a copy of the object with keys changed to values defined by a changeMap object

# Quick Reference
## Install

```
npm i --save object-rename-keys

```

## API

Require and use it:
```
var objectRenameKeys = require('object-rename-keys');

objectRenameKeys(object, changesMap);
```

* `object`: the original object
* `changesMap`: the changesMap is the object you defined what keys you would like to change, and the values changed to.

```
changesMap = {
    originalKey: newValue,
    ...
}
```

and an example object:

```
var address =
{
	street: 'Hollywood Street',
	suburb: 'Calamvale',
	country: 'AUS'
};
```
Let's say in your database the names of some fields are different, e.g. addressStreet instead of street, Suburb instead of suburb etc. So you want to change the keys of the object to:

```
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
```
{
    country: "AUS",
    myStreet: "Hollywood Street",
    Suburb: "Calamvale"
}
```

It will also go through the object recurisively if you specific the keys in the changesMap in a nested way

```
var majigger = {
    address:
    {
        street: 'Hollywood Street',
        suburb: 'Calamvale',
        country: 'AUS'
    }
}

```

```
var changes = {
    address: {
        street: 'myStreet'
    },
    suburb: 'Suburb'
}

var result = objectRenameKeys(majigger, changes);
console.log(result);
```
will output:

```
{
    address:
    {
        suburb: 'Calamvale',
        country: 'AUS',
        myStreet: 'Hollywood Street'
    }
}
```
