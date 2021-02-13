var unknownType = "string #1";
console.log("Value: " + unknownType + "\tType: " + typeof (unknownType));
var num = unknownType.length;
console.log("Value: " + num + "\t\tType: " + typeof (num));
var someValue = "string #2";
console.log("Value: " + someValue + "\tType: " + typeof (someValue));
var strLength = someValue.length;
console.log("Value: " + strLength + "\t\tType: " + typeof (strLength));
// can't directly cast
// from one type into another type
var myStr = "my string";
console.log("Value: " + myStr + "\tType: " + typeof (myStr));
var myIntFromStr = myStr;
console.log("Value: " + myIntFromStr + "\tType: " + typeof (myIntFromStr));
var v1 = { m1: "ValueOfM1" };
console.log(v1);
var myVars = {};
