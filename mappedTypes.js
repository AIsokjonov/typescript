;
function originalToBeReadOnly(obj) {
    return Object.freeze(obj);
}
var var1 = { x: 43, y: "str" };
console.log("original: \t" + var1.x + " \t" + var1.y);
var var2 = originalToBeReadOnly(var1);
// var2.x = 3255; returns error
console.log("readonly: \t" + var2.x + " \t" + var2.y);
;
;
var cat1 = { age: 2, weight: 3, numberOfKitty: 3 };
console.log("\ncat 1: " + cat1.age + " " + cat1.weight + " " + cat1.numberOfKitty);
var cat2 = { age: 3, weight: null, numberOfKitty: null };
console.log("cat 2: " + cat2.age + " " + cat2.weight + " " + cat2.numberOfKitty);
