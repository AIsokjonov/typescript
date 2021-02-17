type RecordType = Record<"m1" | "m2" | "m3", string>;

const x: RecordType = { m1: "str #1", m2: "str #2", m3: "str #3" };
console.log(x);