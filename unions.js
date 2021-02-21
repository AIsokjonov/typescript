// union type
var uvar1 = true;
console.log("before: " + uvar1);
uvar1 = "changed to string";
console.log("after: " + uvar1);
;
;
;
function unionWithDiscriminant(p) {
    switch (p.discriminant) {
        case "InterfaceA":
            console.log(p.m0);
            break;
        case "InterfaceB":
            console.log(p.m1);
            break;
        case "InterfaceC":
            console.log(p.m2);
            break;
    }
}
;
