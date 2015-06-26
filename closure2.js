/**
 * Created by sravank on 15-06-2015.
 */
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    }
}
var innerFunction = outerFunction('hello closure!');
// Note the outerFunction has returned
innerFunction(); // logs hello closure!