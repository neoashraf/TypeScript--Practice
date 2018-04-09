// there is class vs interface
// class solves cohesion(related things should stay together) problem. Class keeps fields(properties are called fields there is a vs between them) and related methods together. 
class Point{
    x = 1;
    y = 2;
    draw = () => {
        console.log(this.x,this.y);
    };
}

let point = new Point();
point.draw();



