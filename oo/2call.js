var foo={}
var bar ={}
function func(val)
{
    this.value =val;
}
func.call(foo,123);
func.call(bar,456);
console.log(foo.value);
console.log(bar.value);