function throw1() {
	throw "this is string exception";
};

function throw2() {
	throw Error("This is error object");
};

function throw3() {
	const err: Error = { name: "Error", message: "Error message with error class!" };
	throw err;
};

try {
	throw2();
} catch(e) {
	console.log(`Exception 1: ${e}`);
};

try {
	throw2();
} catch(e) {
	console.log(`Exception 2: ${e}`);
};

try {
	throw3();
} catch(e) {
	console.log(`Exception 3: ${e}`);
};

// narrowing exceptions with instanceOf
class ArgumentNullException extends Error {
	constructor(public name: string) {
		super("Argument was undefined");
		Object.setPrototypeOf(this, ArgumentNullException.prototype);
	};
};

class ReferenceException extends Error {
	constructor(public x: number, public y: number) {
		super("Reference was undefined");
		Object.setPrototypeOf(this, ReferenceException.prototype);
	};
};

function throwTwoExceptions(switcher: boolean) {
	if (switcher) {
		throw new ArgumentNullException("Switcher");
	};
	throw new ReferenceException(1, 2);
};

try {
	// throw new ArgumentNullException("Switcher");
	throw new ReferenceException(243, 635);
} catch(ex) {
	if (ex instanceof ArgumentNullException) {
		console.log(`I can access name: ${ex.name}`);
	} else if(ex instanceof ReferenceException) {
		console.log(`I can access x, y: ${ex.x}, ${ex.y}`);
	};
};

// exceptions bubble up
//function method1() {
//	method2();
//};
//
//function method2() {
//	method3();
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};

// catch the exception and let it continue
//function method1() {
//	method2();
//};
//
//function method2() {
//	try {
//		method3();
//	} catch(e) {
//		console.log('handled in method 2 but re-throw the ORIGINAL');
//		throw e;
//	};
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};

// catch the original exception and return new exception
//function method1() {
//	method2();
//};
//
//function method2() {
//	try {
//		method3();
//	} catch(e) {
//		console.log("handled in method 2 but re-throw the ORIGINAL");
//		throw Error("New error from method 2");
//	};
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};

// ==========================
// Asynchronous Exceptions
// catching asynchronous exceptions

function returnPromise(): Promise<string> {
	const p = Promise.resolve("promise argument");
	throw new Error("Error message goes here");
	return p;
};

async function handlePromise() {
	try {
		await returnPromise();
	} catch(e) {
		console.log(`Error message: ${e.message}`);
	}
	finally {
		console.log('Function completed its execution');
	};
};
handlePromise();
