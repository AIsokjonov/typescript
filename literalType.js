;
;
function callMeBy(param) {
    if (param.kind === "cat") {
        return param.name;
    }
    else if (param.kind === "dog") {
        return param.nickname;
    }
    return "unknown";
}
;
var cat = { name: "Kitty", kind: "cat" };
var dog = { nickname: "Josh", kind: "dog" };
console.log(callMeBy(cat));
console.log(callMeBy(dog));
;
;
function ajax(url) {
    return { success: true, payload: "Success Message", httpCode: 200 };
}
;
function ajaxCall() {
    var returnValue = ajax("https://github.com");
    if (returnValue.success === true) {
        return returnValue.payload;
    }
    else {
        return returnValue.errorMessage;
    }
}
;
console.log(ajaxCall());
// literal type with const
var c = "c"; // type "c";
console.log(typeof (c));
