// narrowing down to a single type within a union
interface Cat {
  name: string;
  kind: "cat";
};

interface Dog {
  nickname: string;
  kind: "dog";
};

function callMeBy(param: Cat | Dog): string {
  if (param.kind === "cat") {
    return param.name;
  } else if (param.kind === "dog") {
    return param.nickname;
  }
  return "unknown";
};
const cat: Cat = { name: "Kitty", kind: "cat" };
const dog: Dog = { nickname: "Josh", kind: "dog" };

console.log(callMeBy(cat));
console.log(callMeBy(dog));

// narrowing down to a single type within a union
interface Success {
  success: true;
  httpCode: number;
  payload: string;
};

interface Failure {
  success: false;
  errorMessage: string;
};

function ajax(url: string): Success | Failure {
  return { success: true, payload: "Success Message", httpCode: 200 };
};

function ajaxCall(): string {
  const returnValue = ajax("https://github.com");
  if (returnValue.success === true) {
    return returnValue.payload;
  } else {
    return returnValue.errorMessage;
  }
};
console.log(ajaxCall());