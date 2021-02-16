// shadowing
// function f1(i: number): void {
//   console.log(`parameter: ${i}`);
//   // shadowing
//   let i: number = 24;
//   console.log(`shadowed var: ${i}`);
// }
function f2(i2) {
    var i = 10;
    console.log("original: " + i);
    for (var i_1 = 0; i_1 < 5; i_1++) {
        console.log("shadow #11: " + i_1);
        for (var i_2 = 10; i_2 < 15; i_2++) {
            console.log("shadow #2: " + i_2);
        }
    }
}
f2(2);
function f3() {
    var i = 61;
    if (true) {
        // console.log(`original: ${i}`);
        var i_3 = "17";
        console.log("shadowed: " + i_3);
    }
}
;
f3();
// capturing
function capture() {
    var innerFunction;
    if (true) {
        var myVar_1 = "This variable is captured by inner scope";
        innerFunction = function () {
            return myVar_1;
        };
    }
    return innerFunction;
}
;
console.log(capture());
