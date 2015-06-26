var path = require('path');
// logs on Unix: foo/bar/bas
// logs on Windows: foo\bar\bas
console.log(path.join('foo', '/bar', 'bas'));
//Exception will be thrown
console.log(path.join('foo',{},'bar'));