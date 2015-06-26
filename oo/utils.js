var inherits = require("util").inherits
function Animal(name)
{
    this.name = name;
}
Animal.prototype.walk = function(destination)
{
    console.log(this.name+" walking to destination: "+destination);
}

function Bird(name) {
// Call parent constructor
    Animal.call(this, name);
// Additional construction code
}
inherits(Bird, Animal);
// Additional member functions
Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}
var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne
