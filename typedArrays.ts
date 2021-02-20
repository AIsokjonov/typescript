const items = [];
items.push(1);
items.push(true);
items.push("string");

console.log(items);

// Array generic type
// for specific type
const items2: Array<number> = [];
items2.push(1);
items2.push(3);
items2.push(4);

// items2.push("sldnfs"); // throws an error
console.log(items2);

// Array - square bracket notation
const items3: number[] = [];

items3.push(23);
items3.push(534);
items3.push(63);
items3.pop();

console.log(items3);
