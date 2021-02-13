var _a;
var v1 = "value1";
var v2 = "value1";
if (v1 === v2) {
    console.log("Equal when string");
}
var s1 = Symbol("value1");
var s2 = Symbol("value1");
if (s1 === s2) {
    console.log("Equal when symbol");
}
// symbol - as an object property
var prop1 = Symbol();
var obj = (_a = {}, _a[prop1] = "p1", _a);
console.log(obj[prop1]);
// unique symbol
var aSymbol = Symbol("Value1");
aSymbol = Symbol("Value2");
var aSecondSymbol = Symbol("Value3");
var aThirdSymbol = Symbol("Value3");
console.log("Symbol: " + String(aSecondSymbol));
console.log("Unique Symbol: " + String(aThirdSymbol));
