type Family = "mammals" | "reptiles" | "birds";

interface Animal {
  name: string;
  isPredator: boolean;
  family: Family;

  maxSpeed: number;
  maxDepth: number;

  numOfLegs: number;
  canFly: boolean;
};

type Predator = Omit<Animal, "canFly" | "maxDepth">;

function P(obj: Predator) {
  console.log(obj);
};
P({ name: "Black Wolf", isPredator: true, family: "mammals", maxSpeed: 30, numOfLegs: 4 });