let helloMessage = 'Hello Message';

console.log(helloMessage.length);   // Total Length
console.log(helloMessage.charAt(0)); //  First charat to be take
console.log(helloMessage.substring(0,5)); // First five letter
console.log(helloMessage.substring(4)); //Skip first word then print all
console.log(helloMessage.toUpperCase()); //print uppercase

//1
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}


