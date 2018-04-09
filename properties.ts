//properties -- are actually methods(setter,getter | (setter+getter)) but from oputside they looks like fields.
class Point{            
    
    constructor(private _x?:number,private _y?:number){    // ?to make the params not mandatory
    }
    draw = () => {
        console.log(this._x,this._y);
    }
    get x(){              // here x is a propery. get is used to get the value.
        return this._x;
    }
    set x(value:number){   // to set some value
        if(value == 0)
            throw new Error("It can not be zero.");
        this._x = value;
    }
}

let point = new Point(1,2);
console.log(point.x);   // x looks like fields but it is method (set or get)
point.x = 10;
point.draw();