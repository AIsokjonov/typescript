type NoNullValue<T> = T extends null | undefined
  ? never
  : T;

function mprint<T>(p: NoNullValue<T>): void {
    console.log(p);  
}

//print("Test"); // Compile
mprint("strs"); // Does not compile

// adding a property conditionally
interface Person {
  name: string;
  dateCreated: Date;
};

interface Animal {
  name: string;
};

type Modified<T> = T extends { dateCreated: Date } ? T & { modifiedDate: Date; } : never;

const p: Person = { name: "Peter", dateCreated: new Date() };
const a: Animal = { name: "Wolf" };

const p2: Modified<Person> = { ...p, modifiedDate: new Date() };
console.log(p.dateCreated);
console.log(p2.modifiedDate);