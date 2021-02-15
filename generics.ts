function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("string #1");

// the following line tell the compiler
// to automatically detect the type for us
let output2 = identity("string #2");
console.log(output1);
console.log(output2);