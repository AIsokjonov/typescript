let var1: any = "It is a string";
console.log(var1.substring(0,2));
var1 = 1;
// console.log(var1.substring(0,2)); throws an error because number does not have substring() method

let var2: unknown = "this is a string";
let var2Str = var2 as string;
console.log(var2Str.substring(0,4));

interface ObjectC {
	m3: string;
};
interface ObjectB {
	m2?: ObjectC;
};
interface ObjectA {
	m1?: ObjectB;
};

function printo(o: ObjectA): void {
	if (o.m1?.m2) {
		console.log(o.m1.m2.m3);
	}
};

const obj1: ObjectA = {
	m1: undefined,
}
const obj2: ObjectA = {
	m1: {
		m2: undefined,
	},
};
const obj3: ObjectA = {
	m1: {
		m2: {
			m3: "Yeah, This is IT!",
		},
	},
};
printo(obj1);
printo(obj2);
printo(obj3);

// nullish coalescing
function getValue(): string | undefined {
	if (Math.random() > 0.5) {
		return undefined;
	}
	return "Good";
};

let value = getValue() ?? "default";
console.log(value);
