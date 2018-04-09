let a;  // type any 
let aa = 4;  // it takes the type dynamically
let b: number;
let c: number[];
let d: number[] = [1,2,3];
let e: string;
let f: any[] = [1,true,'hello'];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {Red,Green,Blue};
let backgroungColor = Color.Blue;
console.log(backgroungColor);