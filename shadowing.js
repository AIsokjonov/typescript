function f1(n) {
    console.log("Parameter value:", n);
    var i = 100; // shadow #1
    console.log("Variable value", i);
    for (var i_1 = 100; i_1 < 101; i_1++) {
        // shadow #2
        console.log("Look i value:", i_1);
        for (var i_2 = 200; i_2 < 201; i_2++) {
            // shadow #3
            console.log("Inner look i value:", i_2);
        }
    }
    console.log(i);
}
f1(0);
function f2() {
    var i = 10;
    if (true) {
        var i_3 = "i is a string";
        console.log("variable in IF after value:", i_3);
    }
    console.log("variable value:", i);
}
f2();
