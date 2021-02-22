function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("string #1");

// the following line tell the compiler
// to automatically detect the type for us
let output2 = identity("string #2");
console.log(output1);
console.log(output2);

// working with generic type variables
function identity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

let intArr: number[] = [1,2,3,4];
let strArr: string[] = ["a","b","c","d","e"];

identity2(intArr);
identity2(strArr);

// generic types
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity3;
console.log(myIdentity(true));

// generics in detail
interface MyComponent<TProps> {
	name: string;
	id: number;
	props: TProps;
};

interface Props1 {
	color: string;
};

interface Props2 {
	size: number;
};

const component1: MyComponent<Props1> = {
	name: "Component #1",
	id: 1,
	props: { color: "blue" }
};

const component2: MyComponent<Props2> = {
	name: "Component #2",
	id: 2,
	props: { size: 100 }
};

console.log(component1);
console.log(component2);

// generic and list
let list1: number[] = [1,2,3];
list1.push(4);
console.log(list1);

let list2: any[] = [1,2,3];
list2.push("Here is a string");
list2.push(false);
console.log(list2);

// generic vs any
const a: Array<string> = ["abc", "def"];
const s: string = a[0];
console.log(s.substr(0,2));

// standard generic types
// "Array<ItemType>" ==> Array<string>/Array<number> etc
let students: Array<string> = ["Bob", "Robert", "Monic"];

// tuple
type Coordinate = [number, number, number];
let locations: Array<Coordinate> = [[134,134,513],[543,123,65436235]];
console.log(locations);

// "Promise<ReturnType>"
const fetch2 = require("node-fetch");
const res: Promise<Response> = fetch2("https://swapi.dev/api/");
// res.then(res => console.log(`Response Status: ${res.status}`));

// "Readonly<Type>"
type Action = {
	type: "fetchedName";
	data: string;
};

let ro: Readonly<Action> = { type: 'fetchedName', data: 'this is the data' };
console.log(ro);

// "Partial<Type>"
type Contact = {
	name: string;
	email: string;
};

let pt: Partial<Contact> = { };
console.log(`\nPartial type: ${pt}`);

// Key-Value type with "Record<KeyType, ValueType>"
type Result = {
	firstname: string;
	lastname: string;
	score: number;
};

type ResultRecord = Record<string, Result>;
let rc: ResultRecord = {
	"bob": {
		firstname: "Bob",
		lastname: "Marley",
		score: 80 
	},
	"james": {
		firstname: "James",
		lastname: "Radagan",
		score: 90
	}
};
console.log(`Record: ${rc.james.firstname}, ${rc.james.lastname}, ${rc.james.score}`);

// custom generics
interface Person { name: string; age: number };
const persons: Person[] = [{ name: 'john', age: 234 }, { name: 'bob', age: 34 }]
function myMap<TElement, TResult>(
	items: TElement[],
	mappingFunction: (item: TElement) => TResult
): TResult[] {
	return[];
};

const names = myMap<Person, string>(persons, person => person.name);
console.log(names);