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

class Point{            
    
    // have to use this.varname to access the variales
    constructor(private x?:number,private y?:number){    // to make the params not mandatory
        
    }
    draw = () => {
        console.log(this.x,this.y);
    }
}

let point = new Point(1,2);
point.draw();