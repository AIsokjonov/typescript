// mutable arrays
let nums = [1,2,3,4,5];

let nums2: number[];
nums2 = [243,5435,13,543];

let strings = ["strings", "array", "only"];

console.log(nums);
console.log(nums2);
console.log(strings);
console.log(typeof(nums));

// generic array declaration
let nums3: Array<number> = [1, 2,3,4]
console.log(nums3);
console.log(typeof(nums3));

let myArray = new Array<number>();
printArray(myArray);

// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
	console.log(`Before: ${a}`);
	a.push(1);
	console.log(`After: ${a}`);
}

// immutable arrays
let list: ReadonlyArray<number> = [1,2,3,4];
// list.push(5); // throws an error
console.log(list);

// the second way of creating immutable arrays
let list2: readonly number[] = [7,8,9];
list2 = [10,11,12];
console.log(list2);

// control flow analysis
// creating compound arrays
// which can accept more than one type
let myArray4: (number | string)[] = [1,2,"Robert",97];
console.log(myArray4);

// the following array can accept many types
// and Typescript figures it out by itself
let myArray5 = [];
myArray5.push("Bob");
myArray5.push(13);
myArray5.push(false);
console.log(myArray5);
