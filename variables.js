function updateX() {
    var x = "12";
    var a = 423;
    var b = 134;
    if (true) {
        var x = "243";
        var a_1 = 12;
        var b_1 = 41;
        console.log("x inside if: " + x);
        console.log("a inside if: " + a_1);
        console.log("b inside if: " + b_1);
    }
    console.log("x outside if: " + x);
    console.log("a outside if: " + a);
    console.log("b outside if: " + b);
}
updateX();
