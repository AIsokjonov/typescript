interface Person { id: number, name: string };
let myMap = new Map<number, Person>();
myMap.set(1, { id: 1, name: "James" });
myMap.set(2, { id: 2, name: "McCall" });

if (myMap.has(2)) {
  console.log(myMap.get(2)!.name);
};