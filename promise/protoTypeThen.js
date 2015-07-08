var p1 = new Promise(function(resolve, reject) {
    //resolve("Success!");
    // or
     reject ("Error!");
});

p1.then(function(value) {
    console.log(value); // Success!
}, function(reason) {
    console.log(reason); // Error!
});

var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});

p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
}).then(function(value) {
    console.log(value); // 2
});