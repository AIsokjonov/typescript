var _a;
var var1 = "It is a string";
console.log(var1.substring(0, 2));
var1 = 1;
// console.log(var1.substring(0,2)); throws an error because number does not have substring() method
var var2 = "this is a string";
var var2Str = var2;
console.log(var2Str.substring(0, 4));
;
;
;
function printo(o) {
    var _a;
    if ((_a = o.m1) === null || _a === void 0 ? void 0 : _a.m2) {
        console.log(o.m1.m2.m3);
    }
}
;
var obj1 = {
    m1: undefined
};
var obj2 = {
    m1: {
        m2: undefined
    }
};
var obj3 = {
    m1: {
        m2: {
            m3: "Yeah, This is IT!"
        }
    }
};
printo(obj1);
printo(obj2);
printo(obj3);
// nullish coalescing
function getValue() {
    if (Math.random() > 0.5) {
        return undefined;
    }
    return "Good";
}
;
var value = (_a = getValue()) !== null && _a !== void 0 ? _a : "default";
console.log(value);
