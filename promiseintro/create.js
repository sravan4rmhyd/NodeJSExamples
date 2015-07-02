var Q = require('q');
var deferred = Q.defer();
//premise method
var promise = deferred.promise;
promise.then(function (val) {
    console.log('done with:', val);
});
//resolve promise or we can use deferred,reject to reject the promise
deferred.resolve('final value'); // done with: final value