function printableMessage() {
    var message = 'hello';
    function setMessage(newMessage) {
        if (!newMessage) throw new Error('cannot set empty message');
        message = newMessage;
    }
    function getMessage() {
        return message;
    }
    function printMessage() {
        console.log(message);
    }
    return {
        setMessage1: setMessage,
        getMessage1: getMessage,
        printMessage1: printMessage
    };
}
// Pattern in use
var awesome1 = printableMessage();
awesome1.printMessage1(); // hello
var awesome2 = printableMessage();
awesome2.setMessage1('hi');
awesome2.printMessage1(); // hi
// Since we get a new object everytime we call the module function
// awesome1 is unaffected by awesome2
awesome1.printMessage1(); // hello