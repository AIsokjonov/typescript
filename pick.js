;
function myFish(obj) {
    console.log(obj);
}
;
myFish({ name: "clown fish", isPredator: false, maxSpeed: 10 });
function Puma(obj) {
    return { name: "Puma 2", isPredator: true, maxSpeed: 50 };
}
;
console.log(Puma({ name: "wolf", isPredator: true, numOfLegs: 4, maxSpeed: 34 }));
