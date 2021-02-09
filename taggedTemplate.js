var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function analyzeString(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += "*" + placeholders[i] + "*";
    }
    result += literals[literals.length - 1];
    return result;
}
var number = 84;
var number2 = 100;
var endResult = analyzeString(__makeTemplateObject(["the number is ", " which is not like the second number ", ""], ["the number is ", " which is not like the second number ", ""]), number, number2);
console.log(endResult);
