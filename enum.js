var Choice;
(function (Choice) {
    Choice[Choice["A"] = 10.2] = "A";
    Choice[Choice["B"] = 1] = "B";
    Choice[Choice["C"] = 20] = "C";
})(Choice || (Choice = {}));
;
var v = Choice.B;
console.log(v);
