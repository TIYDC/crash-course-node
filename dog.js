
var breed = 'shepherd';

module.exports = function create(options) {
    options = options || {};

    return {
        breed: breed,
        name: options.name,
        age: options.age || 1,
        speak: speak
    };
};

function speak() {
    console.log( this.name + ' says arf' );
}
