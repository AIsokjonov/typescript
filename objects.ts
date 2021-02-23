let o1: Object = "I am an object";
let o2: object = { text: "I am an object" };
let o3: Object = { text: "I am also an Object" };
let o4: object = ["I", "am","an","object"];
let o5: Object = ["I", "am", "an", "object"];

console.log(o1, typeof o1);
console.log(o2, typeof o2);
console.log(o3, typeof o3);
console.log(o4, typeof o4);
console.log(o5, typeof o5);

// curly bracket
let curly1 = { text: "An object" };
let curly2: { text: string } = { text: "An object #2" };
let curly3: {} = { text: "An object #3" };

console.log(curly1, typeof curly1);
console.log(curly2, typeof curly2);
console.log(curly3, typeof curly3);

let create1 = Object.create({ text: "I am a created object" });
let p = { text: "I am an object" };
let create2 = Object.create(p);

console.log(create1, typeof create1);
console.log(p, typeof p);
console.log(create2, typeof create2);

// destructuring objects
const student = {
  id: 20162674,
  name: 'Bob',
  email: 'bob@gmail.com',
  major: 'Computer Engineering'
};

let { id, ...remaining } = student;
console.log(id);
console.log(remaining);

// spread operator
let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
// merged
let a3 = [...a1, ...a2];
console.log(a3);

const myObj = {
  prop1: 1,
  prop2: "2",
  funct1: function() {
    console.log(`Prop #1: ${this.prop1}`);
  },
};

const clonedObj = { ...myObj };
console.log(clonedObj);
console.log(clonedObj.prop1);
myObj.prop1 = 200;
myObj.funct1();
console.log(clonedObj.prop1);

// bang operator
let myVar: number = 14;
console.log(!myVar);