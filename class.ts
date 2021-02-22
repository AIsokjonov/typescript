class Human {
  public greeting: string = "Hello";
};

class Lion {
  public greeting: string = "Grrrrr";
};

class Tulip {
  public greeting: string = "...";
};

class LivingSpecies1 {
  public species: Human;

  constructor(species: Human) {
    this.species = species;
  };
  public sayHello(): void {
    console.log(this.species.greeting);
  };
};
const species1 = new LivingSpecies1(new Human());
species1.sayHello();