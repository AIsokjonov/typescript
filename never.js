function NeverFunction() {
    throw Error("Error message");
}
var s = "a string";
var n;
try {
    n = NeverFunction();
    s = n;
}
catch (e) {
    console.log(e.message);
}
