var items = [];
items.push(1);
items.push(true);
items.push("string");
console.log(items);
// Array generic type
// for specific type
var items2 = [];
items2.push(1);
items2.push(3);
items2.push(4);
// items2.push("sldnfs"); // throws an error
console.log(items2);
// Array - square bracket notation
var items3 = [];
items3.push(23);
items3.push(534);
items3.push(63);
items3.pop();
console.log(items3);
// rest parameters
function printFunc(strParam) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(strParam, scores);
}
;
printFunc("Hello, World", 123, 423, 634, 12);
