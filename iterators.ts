let list1: ( string| number)[] = [1,2,3,"james","bob","robert","george"];

// iterating with "for-in"
for(let i in list1) {
  console.log(`For in: ${i}`);
};

// iterating with "for-of"
for(let i of list1) {
  console.log(`For of: ${i}`);
}

// iterating with "forEach"
list1.forEach(element => console.log(element));

// iterating with standard for while
let students = {
  "IT": {
    ids: [20162674, 20162673, 20162675, 20162676, 20162677],
    names: ['James', 'Bob','Robert','Marlen', 'George']
  },
  "BBA": {
    ids: [20171723, 20172781, 20173427, 20172438, 20175421],
    names: ['Baha', 'Faxy', 'John', 'Shawn', 'Janny']
  }
};

const keys = Object.keys(students);
const entries = Object.entries(students);

console.log(`keys: ${keys}`);
console.log(`entries: ${entries}`);