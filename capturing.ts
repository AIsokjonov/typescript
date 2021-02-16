// capturing
function capture() {
  let innerFunction;
  if(true) {
    let myVar = "This variable is captured by inner scope";
    innerFunction = function() {
      return myVar;
    };
    myVar = "changed";
  }
  return innerFunction();
};
console.log(capture());

function f2() {
  let innerFunction;
  let listFunctions = [];
  for(let i = 10; i < 15; i++) {
    innerFunction = function(param: number) {
      return param;
    }
    listFunctions.push(innerFunction(i));
  }
  for(let k = 0; k < 5; k++) {
    console.log(listFunctions[k]);
  }
}
console.log(f2());

// freezing a variable
function f3() {
  let innerFunction;
  let listFunctions = [];
  for(let i = 10; i < 15; i++) {
    innerFunction = (function(param: number) {
      let f = function() {
        return param;
      }
      return f;
    })(i * 100);
    listFunctions.push(innerFunction);
  }
  for(let k = 0; k < 5; k++) {
    console.log(listFunctions[k]());
  }
};
f3();