// class Point{            
//     private x : number;  // made it private
//     y : number;          // it sis public by default
//     constructor(x?:number,y?:number){    // to make the params not mandatory
//         this.x = x;
//         this.y = y;
//     }
//     draw = () => {
//         console.log(this.x,this.y);
//     }
// }
// let point = new Point(1,2);
// point.draw();
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.draw = function () {
            console.log(_this.x, _this.y);
        };
        x = 55;
        y = 0;
    }
    return Point;
}());
var point = new Point(1, 2);
point.draw();
