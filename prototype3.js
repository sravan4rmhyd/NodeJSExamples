var foo= function() {};
foo.prototype.bar=123;
var a=new foo();
var b =new foo();
console.log(a.bar);
console.log(b.bar);
foo.prototype.bar=456;
console.log(a.bar);
console.log(b.bar);