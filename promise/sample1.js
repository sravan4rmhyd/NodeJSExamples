var Promise = require('promise');
var promise = Promise.resolve(3);
Promise.all([true, promise]).then(function(res)
{
    console.log(res)
});