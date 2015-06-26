var foo = { bas: 123 };
var bar = foo;
bar.bas = 456;
console.log(foo.bas); // 456

var bar1 ={bas:foo.bas};//coping the object
bar1.bas=654;
console.log(foo.bas);