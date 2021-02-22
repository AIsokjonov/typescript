var Human = /** @class */ (function () {
    function Human() {
        this.greeting = "Hello";
    }
    return Human;
}());
;
var Lion = /** @class */ (function () {
    function Lion() {
        this.greeting = "Grrrrr";
    }
    return Lion;
}());
;
var Tulip = /** @class */ (function () {
    function Tulip() {
        this.greeting = "...";
    }
    return Tulip;
}());
;
var LivingSpecies1 = /** @class */ (function () {
    function LivingSpecies1(species) {
        this.species = species;
    }
    ;
    LivingSpecies1.prototype.sayHello = function () {
        console.log(this.species.greeting);
    };
    ;
    return LivingSpecies1;
}());
;
var species1 = new LivingSpecies1(new Human());
species1.sayHello();
