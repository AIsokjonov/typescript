// mutable arrays
var nums = [1, 2, 3, 4, 5];
var nums2;
nums2 = [243, 5435, 13, 543];
var strings = ["strings", "array", "only"];
console.log(nums);
console.log(nums2);
console.log(strings);
console.log(typeof (nums));
// generic array declaration
var nums3 = [1, 2, 3, 4];
console.log(nums3);
console.log(typeof (nums3));
var myArray = new Array();
printArray(myArray);
// Is the same as:
var myArray2 = [];
printArray(myArray2);
// Is the same as:
var myArray3 = [];
printArray(myArray3);
function printArray(a) {
    console.log("Before: " + a);
    a.push(1);
    console.log("After: " + a);
}
// immutable arrays
var list = [1, 2, 3, 4];
// list.push(5); // throws an error
console.log(list);
// the second way of creating immutable arrays
var list2 = [7, 8, 9];
list2 = [10, 11, 12];
console.log(list2);
// control flow analysis
// creating compound arrays
// which can accept more than one type
var myArray4 = [1, 2, "Robert", 97];
console.log(myArray4);
// the following array can accept many types
// and Typescript figures it out by itself
var myArray5 = [];
myArray5.push("Bob");
myArray5.push(13);
myArray5.push(false);
console.log(myArray5);
console.log(typeof (myArray5));
