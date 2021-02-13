let unknownType: unknown = "string #1";
console.log(`Value: ${unknownType}\tType: ${typeof(unknownType)}`);
let num: number = (unknownType as string).length;
console.log(`Value: ${num}\t\tType: ${typeof(num)}`);

let someValue: unknown = "string #2";
console.log(`Value: ${someValue}\tType: ${typeof(someValue)}`);
let strLength: number = (<string>someValue).length;
console.log(`Value: ${strLength}\t\tType: ${typeof(strLength)}`);

// can't directly cast
// from one type into another type
let myStr: string = "my string";
console.log(`Value: ${myStr}\tType: ${typeof(myStr)}`);

let myIntFromStr: number = (myStr as unknown) as number;
console.log(`Value: ${myIntFromStr}\tType: ${typeof(myIntFromStr)}`);

// type assertion
interface YourType {
  m1: string;
}

let v1 = {m1: "ValueOfM1"} as YourType;
console.log(v1);

interface IMyType {
  m1: string;
  m2: number;
}

let myVars = {} as IMyType;