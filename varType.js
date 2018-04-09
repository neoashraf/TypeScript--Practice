var a; // type any 
var b;
var c;
var d = [1, 2, 3];
var e;
var f = [1, true, 'hello'];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroungColor = Color.Blue;
console.log(backgroungColor);
