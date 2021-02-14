interface MyComponent<Tprops> {
  id: number;
  name: string;
  props: Tprops;
}

interface Props1 {
  color: string;
}

interface Props2 {
  size: number;
}

const component1: MyComponent<Props1> = {
  id: 1,
  name: "My #1 component",
  props: {color: "blue"},
};

const component2: MyComponent<Props2> = {
  id: 2,
  name: "My #2 component",
  props: {size: 7},
}
console.log(component1);
console.log(component2);