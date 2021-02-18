// union type
let uvar1: string | boolean = true;
console.log(`before: ${uvar1}`);
uvar1 = "changed to string";
console.log(`after: ${uvar1}`);

// tagged unions
interface InterfaceA {
  discriminant: "InterfaceA";
  m0: number;
};

interface InterfaceB {
  discriminant: "InterfaceB";
  m1: string;
};

interface InterfaceC {
  discriminant: "InterfaceC";
  m2: boolean;
};

function unionWithDiscriminant(p: InterfaceA | InterfaceB | InterfaceC) {
  switch(p.discriminant) {
    case "InterfaceA":
      console.log(p.m0);
      break;
    case "InterfaceB":
      console.log(p.m1);
      break;
    case "InterfaceC":
      console.log(p.m2);
      break;
  }
};