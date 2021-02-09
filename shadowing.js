function f1(i2) {
    console.log("Parameter value:", i2);
    var i = 10; // shadow #1
    console.log("Variable value:", i);
    for (var i_1 = 100; i_1 < 101; i_1++) {
        // shadow #2
        console.log("For-statement value:", i_1);
        for (var i_2 = 200; i_2 < 201; i_2++) {
            // shadow #3
            console.log("For statement 2:", i_2);
        }
    }
    console.log("Variable value:", i);
}
f1(0);
