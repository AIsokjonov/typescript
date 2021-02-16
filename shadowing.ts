
// shadowing

// function f1(i: number): void {
//   console.log(`parameter: ${i}`);

//   // shadowing
//   let i: number = 24;
//   console.log(`shadowed var: ${i}`);
// }

function f2(i2: number) {
  let i: number = 10;
  console.log(`original: ${i}`);
  for(let i = 0; i < 5; i++) {
    console.log(`shadow #11: ${i}`);
    for(let i = 10; i < 15; i++) {
      console.log(`shadow #2: ${i}`);
    }
  }
}
f2(2);

function f3() {
  let i: number = 61;
  if(true) {
    // console.log(`original: ${i}`);
    let i: string = "17";
    console.log(`shadowed: ${i}`);
  }
};
f3();