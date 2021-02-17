function getName(): string {
  return "Name";
};

type functionType = ReturnType<typeof getName>;
const varX: functionType = "this is a string";
console.log(varX);