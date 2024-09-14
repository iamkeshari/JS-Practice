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

/* =========================================================== */
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

//if and else condition
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
///////////////////////////////////////////

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// A function which returns the last character of a given string

//******************************** */
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'

///////////////////////////////

const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'

/////////////////////////////////

const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const index1 = 4;

console.log(`The character at index ${index} is ${sentence2.charAt(index1)}`);
// Expected output: "The character at index 4 is q"

///////////////////////////////

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

//////////////////////////////////

const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const index2 = 4;

console.log(
  `Character code ${sentence3.charCodeAt(index2)} is equal to ${sentence3.charAt(
    index3,
  )}`,
);
// Expected output: "Character code 113 is equal to q"

/////////////////////////////////



