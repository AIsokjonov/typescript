interface myObj {
  label: string;
  size: number;
  port: number;
}

function printLabel(obj: myObj) {
  return obj.label;
};

let myItem: myObj = { label: "my test label", size: 10, port: 9060 };
console.log(printLabel(myItem));

// optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };

  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: "black", width: 70 });
console.log(mySquare);

// readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
};

let p1: Point = {x: 3, y: 4};
console.log(p1);

// readonly array
let a: number[] = [1,2,3];
let ro: ReadonlyArray<number> = [4,5,6];
let ro2: readonly number[] = [7,8,9];
console.log(typeof(ro), ro);
console.log(typeof(ro2), ro2);

// function types
interface SearchFunc {
  (source: string, subString: string): boolean;
};

let mySearch: SearchFunc;
mySearch = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};

console.log(mySearch("Go programming is awesome and I like it", "sfdsm"));

// indexable types
interface Car {
  [name: string]: string;
};

let myCars: Car = ({"BMW": "BMW X7"});
console.log(myCars);

// class types
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): void;
};

class Clock implements ClockInterface {
	currentTime: Date = new Date();
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {}
};

// generic interfaces
interface Student<T> {
  id: T;
  score: T;
};

const stndt: Student<number> = { id: 23, score: 80 };
console.log(`Student: ${stndt.id}, ${stndt.score}`);