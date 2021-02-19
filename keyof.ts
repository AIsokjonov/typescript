// keyof
interface Car {
  name: string;
  model: string;
  price: number;
};

const c1: Car = { name: "BMW", model: "BMW X7", price: 135000 };

function keys<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
};

const nameKey = keys(c1, 'name');
console.log(nameKey);