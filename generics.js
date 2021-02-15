function identity(arg) {
    return arg;
}
var output1 = identity("string #1");
// the following line tell the compiler
// to automatically detect the type for us
var output2 = identity("string #2");
console.log(output1);
console.log(output2);
