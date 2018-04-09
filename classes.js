// there is class vs interface
// class solves cohesion(related things should stay together) problem. Class keeps fields(properties are called fields there is a vs between them) and related methods together. 
var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.x = 1;
        this.y = 2;
        this.draw = function () {
            console.log(_this.x, _this.y);
        };
    }
    return Point;
}());
var point = new Point();
point.draw();
