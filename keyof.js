;
var c1 = { name: "BMW", model: "BMW X7", price: 135000 };
function keys(obj, key) {
    return obj[key];
}
;
var nameKey = keys(c1, 'name');
console.log(nameKey);
