var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
// Fork workers
    for (var i = 0; i < numCPUs; i++) {
        console.log("Starting a worker");
        cluster.fork();
    }
// Listen to any worker exiting
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' exited');
    });
} else {
    console.log("Worker started");
    process.exit();
}