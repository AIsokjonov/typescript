function mainFunc() {
  let innerFunction;
  if(true) {
    let variableCapturedByInnerFunction = "AvailabletoInnerFunction";
    innerFunction = function() {
      return variableCapturedByInnerFunction;
    }
  }
  return innerFunction();
}
console.log(mainFunc());

function mainFunc2() {
  let innerFunction;
  if(true) {
    let variableCapturedByInnerFunction = "AvailableToInnerFunction";
    innerFunction = function() {
      return variableCapturedByInnerFunction;
    }
    variableCapturedByInnerFunction = "Changed";
  }
  return innerFunction();
}
console.log(mainFunc2());

function mainFunc3() {
  let innerFunction;
  let listFunctions = [];
  for(let i = 10; i < 15; i++) {
    innerFunction = function(param1: number) {
      return param1;
    }
    listFunctions.push(innerFunction(i));
  }
  for(let k = 0; k < 5; k++) {
    console.log(listFunctions[k]);
  }
}
mainFunc3();

function mainFunc4() {
  let innerFunction;
  let listFunctions = [];
  for(let i = 10; i < 15; i++) {
    innerFunction = (function(param1: number) {
      let f = function() {
        return param1;
      }
      return f;
    })(i * 1000);
    listFunctions.push(innerFunction);
  }
  for(let k = 0; k < 5; k++) {
    console.log(listFunctions[k]());
  }
}
mainFunc4();