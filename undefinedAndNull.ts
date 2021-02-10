// undefined
let variableNotInitialized: string;
console.log(variableNotInitialized);

let numberNullOrUndefined: number | null | undefined = 123;
console.log(numberNullOrUndefined);
numberNullOrUndefined = null;
console.log(numberNullOrUndefined);
numberNullOrUndefined = undefined;
console.log(numberNullOrUndefined);

function functionWithUndefinedParameter(a: number|undefined, b:number) { }
functionWithUndefinedParameter(1,2);
functionWithUndefinedParameter(undefined, 2);
// functionWithUndefinedParameter(,2); // throws an error

// question mark syntax
function functionWithQuestionMarkParameter(a:number, b?:number) { }
functionWithQuestionMarkParameter(1,2);
functionWithQuestionMarkParameter(1, undefined);
functionWithQuestionMarkParameter(1);

// null
let canBeANumberOrNull: number|null;
canBeANumberOrNull = 10;
canBeANumberOrNull = null;
canBeANumberOrNull = undefined;

function function1(a: number|undefined, b:number){ }

function function2(a?:number, b?: number) { }

function function3(a: number | undefined, b: number) {
	console.log(a);
	console.log(b);
}

function function4(a:number, b?:number) {
	console.log(a);
	console.log(b);
}

function3(1,2);
function3(undefined,2);
function4(3);
function4(3, undefined);

let aNumber: number;
console.log(aNumber);
