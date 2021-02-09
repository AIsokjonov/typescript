var x = "First time";
var x = "Second time";
console.log(x);
var x = "Third time";
console.log(x);

let y = "let first time";
// let y = "throws error!";

const a = "const first time";
// const a = "second time";

let b = 1;
console.log("Outside:", b);
function myFunc() {
  let b = 2;
  console.log("Inside after re-declaring:", b);
  if (b == 2) {
    let b = 3;
    console.log("Inside IF:", b);
    function mySecondFunc() {
      let b = 4;
      console.log("Inside-inside after:", b);
    }
    mySecondFunc();
  }
}
myFunc();