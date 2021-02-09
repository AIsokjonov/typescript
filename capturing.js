function mainFunc() {
    var innerFunction;
    if (true) {
        var variableCapturedByInnerFunction_1 = "AvailabletoInnerFunction";
        innerFunction = function () {
            return variableCapturedByInnerFunction_1;
        };
    }
    return innerFunction();
}
console.log(mainFunc());
function mainFunc2() {
    var innerFunction;
    if (true) {
        var variableCapturedByInnerFunction_2 = "AvailableToInnerFunction";
        innerFunction = function () {
            return variableCapturedByInnerFunction_2;
        };
        variableCapturedByInnerFunction_2 = "Changed";
    }
    return innerFunction();
}
console.log(mainFunc2());
function mainFunc3() {
    var innerFunction;
    var listFunctions = [];
    for (var i = 10; i < 15; i++) {
        innerFunction = function (param1) {
            return param1;
        };
        listFunctions.push(innerFunction(i));
    }
    for (var k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
mainFunc3();
function mainFunc4() {
    var innerFunction;
    var listFunctions = [];
    for (var i = 10; i < 15; i++) {
        innerFunction = (function (param1) {
            var f = function () {
                return param1;
            };
            return f;
        })(i * 1000);
        listFunctions.push(innerFunction);
    }
    for (var k = 0; k < 5; k++) {
        console.log(listFunctions[k]());
    }
}
mainFunc4();
