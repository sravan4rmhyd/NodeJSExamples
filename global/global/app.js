console.log(console ==global.console);
console.log(process==global.process);
require("./addToGlobal");
console.log(someThing);

var path = require("path");
var testPath = path.join("test path","test");
console.log(testPath);