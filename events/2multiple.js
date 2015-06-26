var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var foohandler1 =function test1() {
    console.log('subscriber 1');
};
emitter.on('foo',foohandler1);
var foohandler2 =function test2() {
    console.log('subscriber 2');
};
emitter.on('foo',foohandler2);
console.log(emitter.listeners('foo'));
// Emit
emitter.emit('foo');