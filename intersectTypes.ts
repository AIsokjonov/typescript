// literals with "intersections"
type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };

type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T1 & T3;

// const var1: T1 = { x: "str", y: 2 }; // "y" does NOT exist in T1
const var2: T1 & T2 = { x: "str 2", y: 3 }; // compile
const var3: IntersectType2 = { x: "str 3", y: 4 }; // compile

console.log(var2);
console.log(var3);

// interfaces with "intersections"
interface I1 {
  x: string;
};

interface I2 {
  y: number;
};

interface I3 {
  z: boolean;
};

type IntersectInterface1 = I1 & I2 & I3;
const interfaceVar1: IntersectInterface1 = { x: "interface intersect 1", y: 235, z: false };
console.log(`\nintersections with interfaces: ${interfaceVar1.x}, ${interfaceVar1.y}, ${interfaceVar1.z}`);

// "intersect" as return type or as a parameter
function intersectOnTheFly(t: I1 & I2): void {
  console.log(`intersects as parameter: ${t.x}, ${t.y}`);
};

intersectOnTheFly({ x: "i1", y: 234 });

// "intersect" and "generic" together
function intersectAndGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
  const returnValue = <TT1 & TT2>{};
  for (let index in t1) {
    (returnValue as TT1)[index] = t1[index];
  }
  for (let index in t2) {
    (returnValue as TT2)[index] = t2[index];
  }
  return returnValue;
};