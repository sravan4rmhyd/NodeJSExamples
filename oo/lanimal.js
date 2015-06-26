function Animal(name)
{
    this.name = name;
}
Animal.prototype.walk = function(destination)
{
    console.log(this.name+" walking to destination: "+destination);
}
console.log(Animal.prototype.constructor == Animal);
var animal = new Animal("Elephant");
animal.walk("hyderabad");

function Bird(name)
{
    Animal.call(this,name);
}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly =function(destination)
{
    console.log(this.name+" bird flying "+destination);
}
var birdtest = new Bird("sample bird");
console.log(birdtest.constructor.name)
console.log(birdtest.constructor ==Bird)
birdtest.fly("banglore");
birdtest.walk("banglore")