var str ="Hello Buffer World!..";
//from string to buffer
var buffer = new Buffer(str,"UTF-8");
console.log(buffer);
//from buffer to string
var bufferString = buffer.toString("UTF-8");
console.log(bufferString);