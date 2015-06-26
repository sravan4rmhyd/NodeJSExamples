var foo=require("./foo");
var obj =foo();
console.log("something from foo is "+obj.something);
obj.something =456;
console.log("modified something from foo is "+obj.something);
var foo1= require("./foo");
var obj1 =foo1();
console.log("something from foo1 is "+obj1.something);
