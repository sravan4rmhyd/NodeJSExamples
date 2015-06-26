var path = require("path")
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
//path.relative(from,path.relative(from,to))==path.relative(to)
console.log(path.relative('C:\\orandea\\test\\aaa',(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))));

console.log(path.dirname('/foo/bar/baz/asdf/quux'));

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html','.html'));

console.log(path.extname('index.html'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('index.html.md5'));

console.log(path.sep)
console.log(path.delimiter)
console.log(process.env.PATH.split(path.delimiter));
var parseOut = path.parse('C:\\windows\\system32\\sample.txt');
console.log(parseOut);
console.log(path.format(parseOut));