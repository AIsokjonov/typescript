interface Person {
  id:   number;
  name: string;
};

interface myDict<T> {
  [id: number]: T;
};

const dict: myDict<Person> = {
  [1]: { id: 1, name: "Robert" },
  [2]: { id: 2, name: "James" },
  [3]: { id: 3, name: "Bob" }
};

console.log(dict[2].name);