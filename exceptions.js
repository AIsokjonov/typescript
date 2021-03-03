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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function throw1() {
    throw "this is string exception";
}
;
function throw2() {
    throw Error("This is error object");
}
;
function throw3() {
    var err = { name: "Error", message: "Error message with error class!" };
    throw err;
}
;
try {
    throw2();
}
catch (e) {
    console.log("Exception 1: " + e);
}
;
try {
    throw2();
}
catch (e) {
    console.log("Exception 2: " + e);
}
;
try {
    throw3();
}
catch (e) {
    console.log("Exception 3: " + e);
}
;
// narrowing exceptions with instanceOf
var ArgumentNullException = /** @class */ (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(name) {
        var _this = _super.call(this, "Argument was undefined") || this;
        _this.name = name;
        Object.setPrototypeOf(_this, ArgumentNullException.prototype);
        return _this;
    }
    ;
    return ArgumentNullException;
}(Error));
;
var ReferenceException = /** @class */ (function (_super) {
    __extends(ReferenceException, _super);
    function ReferenceException(x, y) {
        var _this = _super.call(this, "Reference was undefined") || this;
        _this.x = x;
        _this.y = y;
        Object.setPrototypeOf(_this, ReferenceException.prototype);
        return _this;
    }
    ;
    return ReferenceException;
}(Error));
;
function throwTwoExceptions(switcher) {
    if (switcher) {
        throw new ArgumentNullException("Switcher");
    }
    ;
    throw new ReferenceException(1, 2);
}
;
try {
    // throw new ArgumentNullException("Switcher");
    throw new ReferenceException(243, 635);
}
catch (ex) {
    if (ex instanceof ArgumentNullException) {
        console.log("I can access name: " + ex.name);
    }
    else if (ex instanceof ReferenceException) {
        console.log("I can access x, y: " + ex.x + ", " + ex.y);
    }
    ;
}
;
// exceptions bubble up
//function method1() {
//	method2();
//};
//
//function method2() {
//	method3();
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};
// catch the exception and let it continue
//function method1() {
//	method2();
//};
//
//function method2() {
//	try {
//		method3();
//	} catch(e) {
//		console.log('handled in method 2 but re-throw the ORIGINAL');
//		throw e;
//	};
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};
// catch the original exception and return new exception
//function method1() {
//	method2();
//};
//
//function method2() {
//	try {
//		method3();
//	} catch(e) {
//		console.log("handled in method 2 but re-throw the ORIGINAL");
//		throw Error("New error from method 2");
//	};
//};
//
//function method3() {
//	throw Error("Msg from method 3");
//};
//
//try {
//	method1();
//} catch(e) {
//	console.log(e.message);
//};
// ==========================
// Asynchronous Exceptions
// catching asynchronous exceptions
function returnPromise() {
    var p = Promise.resolve("promise argument");
    throw new Error("Error message goes here");
    return p;
}
;
function handlePromise() {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, returnPromise()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    console.log("Error message: " + e_1.message);
                    return [3 /*break*/, 4];
                case 3:
                    console.log('Function completed its execution');
                    return [7 /*endfinally*/];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
handlePromise();
