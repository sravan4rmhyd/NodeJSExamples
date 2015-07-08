var Promise = require('promise');
var p = Promise.resolve('foo');

p.done(function (value) {
    console.log(value); // "foo"
});

p.done(function (value) {
    throw new Error('Ooops!'); // thrown in next tick
});