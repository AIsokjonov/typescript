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
function mprint(p) {
    console.log(p);
}
//print("Test"); // Compile
mprint("strs"); // Does not compile
;
;
var p = { name: "Peter", dateCreated: new Date() };
var a = { name: "Wolf" };
var p2 = __assign(__assign({}, p), { modifiedDate: new Date() });
console.log(p.dateCreated);
console.log(p2.modifiedDate);
