var list1 = [1, 2, 3, "james", "bob", "robert", "george"];
// iterating with "for-in"
for (var i in list1) {
    console.log("For in: " + i);
}
;
// iterating with "for-of"
for (var _i = 0, list1_1 = list1; _i < list1_1.length; _i++) {
    var i = list1_1[_i];
    console.log("For of: " + i);
}
// iterating with "forEach"
list1.forEach(function (element) { return console.log(element); });
// iterating with standard for while
var students = {
    "IT": {
        ids: [20162674, 20162673, 20162675, 20162676, 20162677],
        names: ['James', 'Bob', 'Robert', 'Marlen', 'George']
    },
    "BBA": {
        ids: [20171723, 20172781, 20173427, 20172438, 20175421],
        names: ['Baha', 'Faxy', 'John', 'Shawn', 'Janny']
    }
};
var keys = Object.keys(students);
var entries = Object.entries(students);
console.log("keys: " + keys);
console.log("entries: " + entries);
