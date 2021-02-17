interface Original {
  x: number;
  y: string;
};

type ReadOnly<T> = { readonly [P in keyof T]: T[P] };

function originalToBeReadOnly<T>(obj: T): ReadOnly<T> {
  return Object.freeze(obj);
}

let var1: Original = { x: 43, y: "str" };
console.log(`original: \t${var1.x} \t${var1.y}`);

let var2 = originalToBeReadOnly(var1);
// var2.x = 3255; returns error
console.log(`readonly: \t${var2.x} \t${var2.y}`);

// partial mapped types
interface Car {
  name: string;
  model: string;
  color: string;
};

type ReadOnlyCar<T> = { readonly [P in keyof T]?: T[P] };

// nullable mapped types
interface Cat {
  age: number;
  weight: number;
  numberOfKitty: number;
};

const cat1: Cat = { age: 2, weight: 3, numberOfKitty: 3 };
console.log(`\ncat 1: ${cat1.age} ${cat1.weight} ${cat1.numberOfKitty}`);

type Nullable<T> = { [P in keyof T]: T[P] | null };
const cat2: Nullable<Cat> = { age: 3, weight: null, numberOfKitty: null };
console.log(`cat 2: ${cat2.age} ${cat2.weight} ${cat2.numberOfKitty}`);