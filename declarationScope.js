var x = "First time";
var x = "Second time";
console.log(x);
var x = "Third time";
console.log(x);
var y = "let first time";
// let y = "throws error!";
var a = "const first time";
// const a = "second time";
var b = 1;
console.log("Outside:", b);
function myFunc() {
    var b = 2;
    console.log("Inside after re-declaring:", b);
    if (b == 2) {
        var b_1 = 3;
        console.log("Inside IF:", b_1);
        function mySecondFunc() {
            var b = 4;
            console.log("Inside-inside after:", b);
        }
        mySecondFunc();
    }
}
myFunc();
