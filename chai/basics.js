var chai = require('chai');
chai.use(require('chai-datetime'));
var t1 = new Date();
chai.assert.equalTime(t1,t1);
chai.assert.equalTime(t1,new Date());