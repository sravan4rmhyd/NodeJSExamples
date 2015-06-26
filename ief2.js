var foo =123
if(true)
{
var foo=456
}
console.log(foo);
(function foo(){
if(true)
{
console.log('will be executed!!')
}
})()