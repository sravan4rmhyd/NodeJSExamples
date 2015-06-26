var path =require("path")
console.log(path.isAbsolute('//server')) // true
console.log(path.isAbsolute('C:/foo/..')) // true
console.log(path.isAbsolute('bar\\baz'))   // false
console.log(path.isAbsolute('.')) // false