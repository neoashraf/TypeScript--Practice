// let drawPoint = (x,y) => {
//     console.log(x,y);
// }

// drawPoint(1,2);   

// another way to do this is to pass an object(containing the arguments as its properties)
// here we can send less or more arguments(user error or system error) or arguments of type that are not expected.
// To prevent this we can specify the param types in the receiving function.
// If for many function we have to send the same arguments(same object) we will have to specify the types for every function.

// we use interface to define how the receiving object should be. then every receiving function knows the how the arguments(object) should be.

interface Point{  // naming convention first char uppercase
    x:number,
    y:number
}

let drawPoint = (Point)=>{   // x:number,y:number
    console.log(Point.x,Point.y);
}

drawPoint ({
    x:1,
    y:4
});

// polymorhism needed