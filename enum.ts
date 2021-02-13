enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
};

// mixed enum
enum mixedEnum {
  ChoiceA,
  ChoiceB = "B",
  ChoiceC = 100,
};

// enum without values or "implicit enum"
enum MyEnum {
  ChoiceA,
  ChoiceB,
  ChoiceC,
};

let x: MyEnum = MyEnum.ChoiceB;
console.log(x);

// explicit enum
enum ExplicitEnum {
  ChoiceA = 100,
  ChoiceB,
  ChoiceC,
}

let expEnum: ExplicitEnum = ExplicitEnum.ChoiceB;
console.log(expEnum);

// enum with bitwise operators
enum Power {
  None = 0,
  Invincibility = 1 << 0,
  Telepathy = 1 << 1,
  Invisibility = 1 << 2,
  Everything = Invincibility | Telepathy | Invisibility,
}

let power: Power = Power.Invincibility | Power.Telepathy;
console.log(`Power values: ${power}`);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}

// const enums
const enum Direction {
  East,
  West,
  North,
  South,
};

let directions = [
  Direction.East,
  Direction.West,
  Direction.North,
  Direction.South,
];
console.log(directions);

// merging enums
enum EnumA {
  ChoiceA,
};
enum EnumA {
  ChoiceB = 1,
};

let var123: EnumA = EnumA.ChoiceA;
console.log(var123);
var123 = EnumA.ChoiceB;
console.log(var123);

// adding functions to enums
namespace EnumA {
  export function myFunc() {
    console.log("I'm in an enum");
  }
};
EnumA.myFunc();