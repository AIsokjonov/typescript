function identity(arg) {
    return arg;
}
var output1 = identity("string #1");
// the following line tell the compiler
// to automatically detect the type for us
var output2 = identity("string #2");
console.log(output1);
console.log(output2);
// working with generic type variables
function identity2(arg) {
    console.log(arg.length);
    return arg;
}
var intArr = [1, 2, 3, 4];
var strArr = ["a", "b", "c", "d", "e"];
identity2(intArr);
identity2(strArr);
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
console.log(myIdentity(true));
