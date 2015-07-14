var records;
function observer(recs) {
  records = recs;
}

var obj = { id: 1 };
Object.observe(obj, observer);

obj.a = 'b';
obj.id++;
Object.defineProperty(obj, 'a', { enumerable: false });
delete obj.a;
Object.preventExtensions(obj);

Object.deliverChangeRecords(observer);