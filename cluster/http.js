var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
// Fork workers
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
        console.log("Started a worker with pid: " + worker.process.pid);
    }
// Listen to worker exiting
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' exited');
    });
} else {
// Workers can share any TCP connection
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("Hello world from worker: " + cluster.worker.process.pid);
    }).listen(3000);
}