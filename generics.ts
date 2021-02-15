function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("string #1");

// the following line tell the compiler
// to automatically detect the type for us
let output2 = identity("string #2");
console.log(output1);
console.log(output2);

// working with generic type variables
function identity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

let intArr: number[] = [1,2,3,4];
let strArr: string[] = ["a","b","c","d","e"];

identity2(intArr);
identity2(strArr);

// generic types
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity3;
console.log(myIdentity(true));