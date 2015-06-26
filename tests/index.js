var test = require('tape');
var renameKeys = require('../');

test('default test', function(t){
    t.plan(2);
    var mockAddress = {
        suburb: 'thing',
        street: 'some street',
        postcode: '2000'
    };

    var expectedOriginalObject = {
        suburb: 'thing',
        street: 'some street',
        postcode: '2000'
    };

    var changes = {
        suburb: 'Suburb',
        street: 'myStreet'
    };

    var result = renameKeys(mockAddress, changes);

    var expectedResult = {
        Suburb: 'thing',
        myStreet: 'some street',
        postcode: '2000'
    };

    t.deepEqual(mockAddress, expectedOriginalObject, 'original object has not been changed');
    t.deepEqual(result, expectedResult, 'result is as expected');
});

test('test with no changes object passed', function(t){
  t.plan(1);

  var mockAddress = {
      suburb: 'thing',
      street: 'some street',
      postcode: '2000'
  };

  var changes;

  var result = renameKeys(mockAddress, changes);

  var expectedResult = {
      suburb: 'thing',
      street: 'some street',
      postcode: '2000'
  };

  t.deepEqual(result, expectedResult, 'result is as expected');
})

test('test with nested object 1', function(t){
    t.plan(2);
    var mockAddress = {
        thing: {
            suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };

    var expectedOriginalObject = {
        thing: {
            suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };

    var changes = {
        suburb: 'Suburb',
        street: 'myStreet'
    };

    var result = renameKeys(mockAddress, changes);

    var expectedResult = {
        thing: {
            suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };

    t.deepEqual(mockAddress, expectedOriginalObject, 'original object has not been changed');
    t.deepEqual(result, expectedResult, 'second test result is as expected');
});

test('test with nested object and changes are in nested object', function(t){
    t.plan(2);
    var mockAddress = {
        thing: {
            suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };

    var expectedOriginalObject = {
        thing: {
            suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };

    var changes = {
        thing: {
            suburb: 'Suburb'
        },
        street: 'myStreet'
    };

    var result = renameKeys(mockAddress, changes);

    var expectedResult = {
        thing: {
            Suburb: 'thing',
            street: 'some street',
            postcode: '2000'
        }
    };
    t.deepEqual(mockAddress, expectedOriginalObject, 'original object has not been changed');
    t.deepEqual(result, expectedResult, 'result is as expected');
});

test('test with nested object and nested changes but does not contain the key', function(t){
  t.plan(1);
  var mockAddress = {
      thing: {
          suburb: 'thing',
          street: 'some street',
          postcode: '2000'
      }
  };

  var changes = {
      zed: {
          suburb: 'Suburb'
      },
      street: 'myStreet'
  };

  var result = renameKeys(mockAddress, changes);

  var expectedResult = {
      thing: {
          suburb: 'thing',
          street: 'some street',
          postcode: '2000'
      }
  };
  t.deepEqual(result, expectedResult, 'result is as expected');
});

test('test with array inside the object', function(t){
  t.plan(1);
  var mockAddress = ['suburb', 'street'];

  var changes = {
      thing: {
          suburb: 'Suburb'
      },
      street: 'myStreet'
  };

  var result = renameKeys(mockAddress, changes);

  var expectedResult = ['suburb', 'street'];
  t.deepEqual(result, expectedResult, 'result is as expected');

});
