var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function declaration
function printHello() {
    console.log('Function Declaration');
}
;
printHello();
var greet = function () {
    console.log('Function expression!');
};
greet();
// functions inside class
var myPrivateFunctions = /** @class */ (function () {
    function myPrivateFunctions() {
        // protected function
        this.a1 = 123;
        this.privateFunc();
    }
    ;
    // private function
    myPrivateFunctions.prototype.privateFunc = function () {
        console.log("From the private function!");
    };
    ;
    myPrivateFunctions.prototype.b2 = function () {
        console.log(this.a1);
    };
    ;
    // public functions
    myPrivateFunctions.prototype.publicFunc = function () {
        console.log("this is public function!");
    };
    ;
    return myPrivateFunctions;
}());
;
var classB = /** @class */ (function (_super) {
    __extends(classB, _super);
    function classB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b1 = 52;
        return _this;
    }
    classB.prototype.b3 = function () {
        _super.prototype.b2.call(this);
    };
    ;
    return classB;
}(myPrivateFunctions));
;
var c = new myPrivateFunctions();
c.publicFunc();
var b1 = new classB();
