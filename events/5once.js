var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fooHandler = function () {
    console.log('handler called');
};
emitter.once('foo', fooHandler);
// Emit twice
emitter.emit('foo');
emitter.emit('foo');
