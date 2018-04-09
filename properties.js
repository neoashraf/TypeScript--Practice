//properties -- are actually methods(setter,getter | (setter+getter)) but from oputside they looks like fields.
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.draw = function () {
            console.log(_this._x, _this._y);
        };
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value == 0)
                throw new Error("It can not be zero.");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
console.log(point.x); // x looks like fields but it is method (set or get)
point.x = 10;
point.draw();
