var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.draw = function () {
            console.log(_this.x, _this.y);
        };
        this.x = x;
        this.y = y;
    }
    ;
    return Point;
}());
var point = new Point(11, 22);
point.draw();
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.draw = function () {
            console.log(_this.x, _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point();
point.draw();
