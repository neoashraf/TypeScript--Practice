"use strict";
exports.__esModule = true;
var likeFunc = /** @class */ (function () {
    function likeFunc(count, isLike) {
        var _this = this;
        this.count = count;
        this.isLike = isLike;
        this.updateCount = function () {
            if (_this.isLike)
                _this.count++;
        };
    }
    Object.defineProperty(likeFunc.prototype, "countLike", {
        get: function () {
            return this.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(likeFunc.prototype, "buttonStatus", {
        get: function () {
            return this.isLike;
        },
        enumerable: true,
        configurable: true
    });
    return likeFunc;
}());
exports.likeFunc = likeFunc;
