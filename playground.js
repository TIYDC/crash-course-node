
var foo = 'bar';

console.log( foo );

var dogCreator = require('./dog');

var dog = dogCreator({
    name: 'Vincent',
    age: 11
});

var dogtwo = dogCreator({
    name: 'Moooooose'
});
dogtwo.name = 'Moose';

var dogthree = dogCreator();

console.log(dog, dogtwo);

dog.speak();
