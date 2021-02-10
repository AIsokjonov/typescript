"use strict";
// undefined
var variableNotInitialized;
console.log(variableNotInitialized);
var numberNullOrUndefined = 123;
console.log(numberNullOrUndefined);
numberNullOrUndefined = null;
console.log(numberNullOrUndefined);
numberNullOrUndefined = undefined;
console.log(numberNullOrUndefined);
function functionWithUndefinedParameter(a, b) { }
functionWithUndefinedParameter(1, 2);
functionWithUndefinedParameter(undefined, 2);
// functionWithUndefinedParameter(,2); // throws an error
// question mark syntax
function functionWithQuestionMarkParameter(a, b) { }
functionWithQuestionMarkParameter(1, 2);
functionWithQuestionMarkParameter(1, undefined);
functionWithQuestionMarkParameter(1);
// null
var canBeANumberOrNull;
canBeANumberOrNull = 10;
canBeANumberOrNull = null;
canBeANumberOrNull = undefined;
function function1(a, b) { }
function function2(a, b) { }
function function3(a, b) {
    console.log(a);
    console.log(b);
}
function function4(a, b) {
    console.log(a);
    console.log(b);
}
function3(1, 2);
function3(undefined, 2);
function4(3);
function4(3, undefined);
var aNumber;
console.log(aNumber);
