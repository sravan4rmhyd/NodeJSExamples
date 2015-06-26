var foo=123;
if(true)
{
 (function(){
	var foo=456;//will create a new scope
 })()
}
console.log(foo)