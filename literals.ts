// string literals
type Major = "Computer Science" | "Business Administration" | "International Studies" | "Literature";
let myMajor: Major = "Computer Science";
console.log(`My major: ${myMajor}`);

type Lecture = "Data Structures & Algorithms" | "Network Security" | "Database Design" | "Mobile Development";
let myLectures: Lecture = "Network Security";
console.log(`Lectures I took: ${myLectures}`);

// number literals
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
let menuSize: Column = 4;
let mainContent: Column = 8;
console.log(`Menu size: ${menuSize}`);
console.log(`Main content: ${mainContent}`);

// mixed literal type
type OptionOpen = true | false | "true" | "false";
function openWindow(option: OptionOpen): void {
	if (option === "true" || option === true) {
		console.log("true");
	} else if (option === "false" || option === false) {
		console.log("false");
	} else {
		const c: never = option;
		console.log(c);
	}
}
let myOption: OptionOpen = true;
openWindow(myOption
