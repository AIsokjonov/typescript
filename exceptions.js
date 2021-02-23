function throw1() {
    throw "error in string";
}
;
function throw2() {
    throw Error("Message here");
}
;
function throw3() {
    var err = { name: "New Error Message here", message: "Message" };
    throw err;
}
;
try {
    throw1();
}
catch (e) {
    console.log("Exception 1", e);
}
try {
    throw2();
}
catch (e) {
    console.log("Exception 2", e);
}
try {
    throw3();
}
catch (e) {
    console.log("Exception 3", e);
}
// exceptions bubble up
function method1() {
    method2();
}
;
function method2() {
    method3();
}
;
function method3() {
    throw Error("Error Message");
}
;
try {
    method1();
}
catch (e) {
    console.log(e.message);
}
;
