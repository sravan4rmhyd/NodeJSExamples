var path =require("path")
console.log(path.resolve('/foo/bar', './baz'))
// returns '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'))// to is absolute path
// returns '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// if currently in /home/myself/node, it returns '/home/myself/node/wwwroot/static_files/gif/image.gif'