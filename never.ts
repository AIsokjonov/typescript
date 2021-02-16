function NeverFunction(): never {
	throw Error("Error message");
}

let s: string = "a string";
let n: never;

try {
	n = NeverFunction();
	s = n;
}
catch(e) {
	console.log(e.message);
}