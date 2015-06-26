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


test('test with nested object', function(t){
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
            Suburb: 'thing',
            myStreet: 'some street',
            postcode: '2000'
        }
    };

    t.deepEqual(mockAddress, expectedOriginalObject, 'original object has not been changed');
    t.deepEqual(result, expectedResult, 'result is as expected');
});
