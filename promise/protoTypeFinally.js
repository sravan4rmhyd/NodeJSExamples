var Promise = require('promise');
var p = Promise.resolve('foo');
var disposed = false;
p.then(function (value) {
    if (Math.random() < 0.5) throw new Error('oops!');
    else return value;
}).finally(function () {
    disposed = true; // always called
    console.log("called finally");
}).then(function (value) {
    console.log(value); // => "foo"
}, function (err) {
    console.log(err); // => oops!
});