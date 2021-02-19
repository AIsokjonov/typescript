;
var myMap = new Map();
myMap.set(1, { id: 1, name: "James" });
myMap.set(2, { id: 2, name: "McCall" });
if (myMap.has(2)) {
    console.log(myMap.get(2).name);
}
;
