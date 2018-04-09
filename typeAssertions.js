// tpye assertion example
var message = 'abc'; // message gets the type string 
var len = message.endsWith('c'); // as ts knows the typeof message after the dot it automatically suggests all the available methods
console.log(len);
var sms; // type any
sms = "abc";
// sms.     // here after dot no suggestion. To get suggestion the typeof var must be khown to ts. So we have to assert type
var ch = sms.endsWith('c');
console.log(ch);
ch = sms.endsWith('c');
console.log(ch);
