// declaring with "var"
function varFunction() {
	var x = "111";
	if (true) {
		var x = "999";
	}
	console.log(x);
}
varFunction();

// declaring with "let"
function letFunction() {
	let x = "111";
	if (true) {
		let x = 999;
	}
	console.log(x);
}
letFunction();

function myLetVarFunc() {
	let myLetVar = "Global var";
	if(true){
		myLetVar += " and inside as well";
	}
	console.log(myLetVar);
}
myLetVarFunc();

// declaring with "const"
const user1 = { id: 1, name: "James" };
const user2 = { id: 2, name: "Robert" };

// user1 = user2; // throws error
console.log(user1.name); 
user1.name = user2.name; // Legit 
console.log(user1.name);

console.log(user1.id);
user1.id = 1000; // Legit
console.log(user1.id);

// array and constant
function constFunction() {
	const myList = [1,2,3];
	myList.push(4);
	console.log(myList);
}
constFunction();

function constChangeObject() {
	let obj1 = { p1: "p1value" };
	ob1 = { p1: "p1value changed" };

	const obj2 = { p2: "p2value" };
	console.log(obj2);
	obj2.p2 = "Work!";
	console.log(obj2)
}
constChangeObject();
