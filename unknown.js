function getValue() {
    if (Math.random() > 0.5) {
        return undefined;
    }
    return "Good";
}
var value = getValue();
if (!value) {
    value = "Default";
}
console.log(value);
