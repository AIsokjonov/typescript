let v1 = "value1";
let v2 = "value1";
if(v1 === v2) {
	console.log("Equal when string");
}

let s1 = Symbol("value1");
let s2 = Symbol("value1");
if (s1 === s2) {
	console.log("Equal when symbol");
}

// symbol - as an object property
const prop1 = Symbol();
const obj = { [prop1]: "p1" };
console.log(obj[prop1]);

// unique symbol
let aSymbol: Symbol = Symbol("Value1");
aSymbol = Symbol("Value2");

const aSecondSymbol: Symbol = Symbol("Value3");
const aThirdSymbol: unique symbol = Symbol("Value3");
console.log(`Symbol: ${String(aSecondSymbol)}`);
console.log(`Unique Symbol: ${String(aThirdSymbol)}`);
