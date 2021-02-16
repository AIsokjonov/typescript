// capturing
function capture() {
    var innerFunction;
    if (true) {
        var myVar_1 = "This variable is captured by inner scope";
        innerFunction = function () {
            return myVar_1;
        };
        myVar_1 = "changed";
    }
    return innerFunction();
}
;
console.log(capture());
function f2() {
    var innerFunction;
    var listFunctions = [];
    for (var i = 10; i < 15; i++) {
        innerFunction = function (param) {
            return param;
        };
        listFunctions.push(innerFunction(i));
    }
    for (var k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
console.log(f2());
// freezing a variable
function f3() {
    var innerFunction;
    var listFunctions = [];
    for (var i = 10; i < 15; i++) {
        innerFunction = (function (param) {
            var f = function () {
                return param;
            };
            return f;
        })(i * 100);
        listFunctions.push(innerFunction);
    }
    for (var k = 0; k < 5; k++) {
        console.log(listFunctions[k]());
    }
}
;
f3();
