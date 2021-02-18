// const var1: T1 = { x: "str", y: 2 }; // "y" does NOT exist in T1
var var2 = { x: "str 2", y: 3 }; // compile
var var3 = { x: "str 3", y: 4 }; // compile
console.log(var2);
console.log(var3);
;
;
;
var interfaceVar1 = { x: "interface intersect 1", y: 235, z: false };
console.log("\nintersections with interfaces: " + interfaceVar1.x + ", " + interfaceVar1.y + ", " + interfaceVar1.z);
// "intersect" as return type or as a parameter
function intersectOnTheFly(t) {
    console.log("intersects as parameter: " + t.x + ", " + t.y);
}
;
intersectOnTheFly({ x: "i1", y: 234 });
// "intersect" and "generic" together
function intersectAndGeneric(t1, t2) {
    var returnValue = {};
    for (var index in t1) {
        returnValue[index] = t1[index];
    }
    for (var index in t2) {
        returnValue[index] = t2[index];
    }
    return returnValue;
}
;
