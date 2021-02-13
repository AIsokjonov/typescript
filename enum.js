var MyStringEnum;
(function (MyStringEnum) {
    MyStringEnum["ChoiceA"] = "A";
    MyStringEnum["ChoiceB"] = "B";
})(MyStringEnum || (MyStringEnum = {}));
;
// mixed enum
var mixedEnum;
(function (mixedEnum) {
    mixedEnum[mixedEnum["ChoiceA"] = 0] = "ChoiceA";
    mixedEnum["ChoiceB"] = "B";
    mixedEnum[mixedEnum["ChoiceC"] = 100] = "ChoiceC";
})(mixedEnum || (mixedEnum = {}));
;
// enum without values or "implicit enum"
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["ChoiceA"] = 0] = "ChoiceA";
    MyEnum[MyEnum["ChoiceB"] = 1] = "ChoiceB";
    MyEnum[MyEnum["ChoiceC"] = 2] = "ChoiceC";
})(MyEnum || (MyEnum = {}));
;
var x = MyEnum.ChoiceB;
console.log(x);
// explicit enum
var ExplicitEnum;
(function (ExplicitEnum) {
    ExplicitEnum[ExplicitEnum["ChoiceA"] = 100] = "ChoiceA";
    ExplicitEnum[ExplicitEnum["ChoiceB"] = 101] = "ChoiceB";
    ExplicitEnum[ExplicitEnum["ChoiceC"] = 102] = "ChoiceC";
})(ExplicitEnum || (ExplicitEnum = {}));
var expEnum = ExplicitEnum.ChoiceB;
console.log(expEnum);
// enum with bitwise operators
var Power;
(function (Power) {
    Power[Power["None"] = 0] = "None";
    Power[Power["Invincibility"] = 1] = "Invincibility";
    Power[Power["Telepathy"] = 2] = "Telepathy";
    Power[Power["Invisibility"] = 4] = "Invisibility";
    Power[Power["Everything"] = 7] = "Everything";
})(Power || (Power = {}));
var power = Power.Invincibility | Power.Telepathy;
console.log("Power values: " + power);
if (Power.Telepathy === (power & Power.Telepathy)) {
    console.log("Power of telepathy available");
}
;
var directions = [
    0 /* East */,
    1 /* West */,
    2 /* North */,
    3 /* South */,
];
console.log(directions);
// merging enums
var EnumA;
(function (EnumA) {
    EnumA[EnumA["ChoiceA"] = 0] = "ChoiceA";
})(EnumA || (EnumA = {}));
;
(function (EnumA) {
    EnumA[EnumA["ChoiceB"] = 1] = "ChoiceB";
})(EnumA || (EnumA = {}));
;
var var123 = EnumA.ChoiceA;
console.log(var123);
var123 = EnumA.ChoiceB;
console.log(var123);
// adding functions to enums
(function (EnumA) {
    function myFunc() {
        console.log("I'm in an enum");
    }
    EnumA.myFunc = myFunc;
})(EnumA || (EnumA = {}));
;
EnumA.myFunc();
