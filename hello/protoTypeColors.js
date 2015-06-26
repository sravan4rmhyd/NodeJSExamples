String.prototype.red = function (str) {
// Changes the console foreground to red
    var redCode = '\x1b[31m';
// Resets the console foreground
    var clearCode = '\x1b[39m';
    return redCode + this + clearCode;
}
String.prototype.__defineGetter__("redColor",function()
{
    return '\x1b[31m'+this+'\x1b[39m';
})
console.log('Hello World!'.red());
console.log('Hello Red World!'.redColor);