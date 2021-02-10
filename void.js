function f1() {
    return undefined;
}
var returnType = f1();
console.log(returnType);
function function1Commit1() {
    return 1;
}
console.log(function1Commit1());
function function1Commit2() {
    return "1";
}
console.log(function1Commit2());
function function1Commit3() {
    if (Math.random() > 0.5)
        return "1";
    else
        return 1;
}
console.log(function1Commit3());
function leaveEarly(leaveFast) {
    console.log("Hello");
    if (leaveFast) {
        console.log("Quick Bye!");
        return;
    }
    console.log("Later good bye!");
}
console.log("-- with true --");
var returnValue1 = leaveEarly(true);
console.log("-- with false --");
var returnValue2 = leaveEarly(false);
console.log("-- Types --");
console.log(typeof returnValue1);
console.log(typeof returnValue1);
