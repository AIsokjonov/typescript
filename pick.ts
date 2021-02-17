interface Animal {
  name: string;
  isPredator: boolean;
  numOfLegs: number;
  maxSpeed: number;
};

type Fish = Pick<Animal, "name" | "isPredator" | "maxSpeed">;
function myFish(obj: Fish) {
  console.log(obj);
};
myFish({ name: "clown fish", isPredator: false, maxSpeed: 10 });

function Puma(obj: Animal): Fish {
  return {name: "Puma 2", isPredator: true, maxSpeed: 50};
};
console.log(Puma({ name: "wolf", isPredator: true, numOfLegs: 4, maxSpeed: 34 }));