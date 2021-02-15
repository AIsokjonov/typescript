function printLabel(obj) {
    return obj.label;
}
;
var myItem = { label: "my test label", size: 10, port: 9060 };
console.log(printLabel(myItem));
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 70 });
console.log(mySquare);
;
var p1 = { x: 3, y: 4 };
console.log(p1);
// readonly array
var a = [1, 2, 3];
var ro = [4, 5, 6];
var ro2 = [7, 8, 9];
console.log(typeof (ro), ro);
console.log(typeof (ro2), ro2);
;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("Go programming is awesome and I like it", "sfdsm"));
;
var myCars = ({ "BMW": "BMW X7" });
console.log(myCars);
;
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
;
