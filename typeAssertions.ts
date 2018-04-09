// tpye assertion example

let message = 'abc';   // message gets the type string 
let len = message.endsWith('c');   // as ts knows the typeof message after the dot it automatically suggests all the available methods
console.log(len);

let sms; // type any
sms = "abc";
// sms.     // here after dot no suggestion. To get suggestion the typeof var must be khown to ts. So we have to assert type

let ch = (<string>sms).endsWith('c');
console.log(ch);
ch = (sms as string).endsWith('c');
console.log(ch);
