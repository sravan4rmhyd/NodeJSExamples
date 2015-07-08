var Promise = require('promise');
var p1 = new Promise(function(resolve, reject) {
    resolve("Success");
});

p1.then(function(value) {
    console.log(value); // "Success!"
    throw "oh, no!";
}).catch(function(e) {
    console.log(e); // "oh, no!"
});

p1.then(function(value) {
    console.log(value); // "Success!"
    throw "oh, no!";
}).then(undefined, function(e) {
    console.log(e); // "oh, no!"
})