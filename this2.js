function foo() {
    console.log('is this called from globals? : ', this === global); // true
    //if we were running it in the browser, the global variable would be window instead of global
}
foo();