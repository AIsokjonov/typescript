var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var o1 = "I am an object";
var o2 = { text: "I am an object" };
var o3 = { text: "I am also an Object" };
var o4 = ["I", "am", "an", "object"];
var o5 = ["I", "am", "an", "object"];
console.log(o1, typeof o1);
console.log(o2, typeof o2);
console.log(o3, typeof o3);
console.log(o4, typeof o4);
console.log(o5, typeof o5);
// curly bracket
var curly1 = { text: "An object" };
var curly2 = { text: "An object #2" };
var curly3 = { text: "An object #3" };
console.log(curly1, typeof curly1);
console.log(curly2, typeof curly2);
console.log(curly3, typeof curly3);
var create1 = Object.create({ text: "I am a created object" });
var p = { text: "I am an object" };
var create2 = Object.create(p);
console.log(create1, typeof create1);
console.log(p, typeof p);
console.log(create2, typeof create2);
// destructuring objects
var student = {
    id: 20162674,
    name: 'Bob',
    email: 'bob@gmail.com',
    major: 'Computer Engineering'
};
var id = student.id, remaining = __rest(student, ["id"]);
console.log(id);
console.log(remaining);
// spread operator
var a1 = [1, 2, 3, 4];
var a2 = [5, 6, 7, 8];
// merged
var a3 = __spreadArrays(a1, a2);
console.log(a3);
var myObj = {
    prop1: 1,
    prop2: "2",
    funct1: function () {
        console.log("Prop #1: " + this.prop1);
    }
};
var clonedObj = __assign({}, myObj);
console.log(clonedObj);
console.log(clonedObj.prop1);
myObj.prop1 = 200;
myObj.funct1();
console.log(clonedObj.prop1);
// bang operator
var myVar = 14;
console.log(!myVar);
