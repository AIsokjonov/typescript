var myMajor = "Computer Science";
console.log("My major: " + myMajor);
var myLectures = "Network Security";
console.log("Lectures I took: " + myLectures);
var menuSize = 4;
var mainContent = 8;
console.log("Menu size: " + menuSize);
console.log("Main content: " + mainContent);
function openWindow(option) {
    if (option === "true" || option === true) {
        console.log("true");
    }
    else if (option === "false" || option === false) {
        console.log("false");
    }
    else {
        var c_1 = option;
        console.log(c_1);
    }
}
var myOption = true;
openWindow(myOption);
