function identity(arg) {
    return arg;
}
var output1 = identity("string #1");
// the following line tell the compiler
// to automatically detect the type for us
var output2 = identity("string #2");
console.log(output1);
console.log(output2);
// working with generic type variables
function identity2(arg) {
    console.log(arg.length);
    return arg;
}
var intArr = [1, 2, 3, 4];
var strArr = ["a", "b", "c", "d", "e"];
identity2(intArr);
identity2(strArr);
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
console.log(myIdentity(true));
;
;
;
var component1 = {
    name: "Component #1",
    id: 1,
    props: { color: "blue" }
};
var component2 = {
    name: "Component #2",
    id: 2,
    props: { size: 100 }
};
console.log(component1);
console.log(component2);
// generic and list
var list1 = [1, 2, 3];
list1.push(4);
console.log(list1);
var list2 = [1, 2, 3];
list2.push("Here is a string");
list2.push(false);
console.log(list2);
// generic vs any
var a = ["abc", "def"];
var s = a[0];
console.log(s.substr(0, 2));
// standard generic types
// "Array<ItemType>" ==> Array<string>/Array<number> etc
var students = ["Bob", "Robert", "Monic"];
var locations = [[134, 134, 513], [543, 123, 65436235]];
console.log(locations);
// "Promise<ReturnType>"
var fetch2 = require("node-fetch");
var res = fetch2("https://swapi.dev/api/");
var ro = { type: 'fetchedName', data: 'this is the data' };
console.log(ro);
var pt = {};
console.log("\nPartial type: " + pt);
var rc = {
    "bob": {
        firstname: "Bob",
        lastname: "Marley",
        score: 80
    },
    "james": {
        firstname: "James",
        lastname: "Radagan",
        score: 90
    }
};
console.log("Record: " + rc.james.firstname + ", " + rc.james.lastname + ", " + rc.james.score);
;
var persons = [{ name: 'john', age: 234 }, { name: 'bob', age: 34 }];
function myMap(items, mappingFunction) {
    return [];
}
;
var names = myMap(persons, function (person) { return person.name; });
console.log(names);
