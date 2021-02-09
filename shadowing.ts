function f1(n: number) {
  console.log("Parameter value:", n);
  let i: number = 100; // shadow #1
  console.log("Variable value", i);
  for (let i = 100; i < 101; i++) {
    // shadow #2
    console.log("Look i value:", i);
    for (let i = 200; i < 201; i++) {
      // shadow #3
      console.log("Inner look i value:", i);
    }
  }
  console.log(i);
}
f1(0);

function f2() {
  let i: number = 10;
  if(true) {
    let i: string = "i is a string";
    console.log("variable in IF after value:", i);
  }
  console.log("variable value:", i);
}
f2();