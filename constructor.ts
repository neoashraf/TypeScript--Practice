class Point{
    x : number;
    y : number;
    constructor(x:number,y:number){    // it can not be arrow func
        this.x = x;
        this.y = y;
    };
    draw = () => {
        console.log(this.x,this.y);
    };
}

let point = new Point(11,22);
point.draw();


class Point{            
    x : number;
    y : number;
    constructor(x?:number,y?:number){    // to make the params not mandatory
        this.x = x;
        this.y = y;
    }
    draw = () => {
        console.log(this.x,this.y);
    }
}

let point = new Point();
point.draw();