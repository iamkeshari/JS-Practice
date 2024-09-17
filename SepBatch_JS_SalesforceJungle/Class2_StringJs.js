let helloMessage = 'Hello Message';

console.log(helloMessage.length);   // Total Length
console.log(helloMessage.charAt(0)); //  First charat to be take
console.log(helloMessage.substring(0,5)); // First five letter
console.log(helloMessage.substring(4)); //Skip first word then print all
console.log(helloMessage.toUpperCase()); //print uppercase
console.log(helloMessage.toLowerCase()); //print lowercase

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
////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const index1 = 4;

console.log(`The character at index ${index} is ${sentence2.charAt(index1)}`);
// Expected output: "The character at index 4 is q"

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const index2 = 4;

console.log(
  `Character code ${sentence3.charCodeAt(index2)} is equal to ${sentence3.charAt(
    index2,
  )}`,
);
// Expected output: "Character code 113 is equal to q"

//////////////////////////////////////////////////////////////////////////////////////////////////////////
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

///////////////////////////////////////////////////////////////////////////////////

const strr1 = 'Cats are the best!';

console.log(strr1.endsWith('best!'));
// Expected output: true

console.log(strr1.endsWith('best', 17));
// Expected output: true

const sttr2 = 'Is this a question?';

console.log(sttr2.endsWith('question'));
// Expected output: false
//////////////////////////////////////////////////////////////////////////////////////////

//Includes

const sentence10 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence10.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"

//////////////////////////////////////////////////////////////////////////////////////

//indexof
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"

////////////////////////////////////////////////////////////////////////////////////////

//iswellformed

const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//lastIndexOf

const paragraph3 = "I think Ruth's dog is cuter than your dog!";

const searchTerm3 = 'dog';

console.log(
  `Index of the last ${searchTerm3} is ${paragraph3.lastIndexOf(searchTerm3)}`,
);
// Expected output: "Index of the last "dog" is 38"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//localeCompare
const a10 = 'réservé'; // With accents, lowercase
const b10 = 'RESERVE'; // No accents, uppercase

console.log(a10.localeCompare(b10));
// Expected output: 1
console.log(a10.localeCompare(b10, 'en', { sensitivity: 'base' }));
// Expected output: 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//match
const paragraph11 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph11.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//matchall();
const regexp = /t(e)(st(\d?))/g;
const str12 = 'test1test2';

const array6 = [...str12.matchAll(regexp)];

console.log(array6[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array6[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//normalize();

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//padEnd
const str13 = 'Breaded Mushrooms';

console.log(str13.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str23 = '200';

console.log(str23.padEnd(5));
// Expected output: "200  "

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//padStart
const str15 = '5';

console.log(str15.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//repeat
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//replace

const paragraph16 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph16.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex3 = /Dog/i;
console.log(paragraph16.replace(regex3, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//replaceall
const paragraph88 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph88.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex88 = /Dog/gi;
console.log(paragraph88.replaceAll(regex88, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//search
const paragraph89 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex9 = /[^\w\s']/g;

console.log(paragraph89.search(regex9));
// Expected output: 41

console.log(paragraph89[paragraph89.search(regex9)]);
// Expected output: "!"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//slice

const str8 = 'The quick brown fox jumps over the lazy dog.';

console.log(str8.slice(31));
// Expected output: "the lazy dog."

console.log(str8.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str8.slice(-4));
// Expected output: "dog."

console.log(str8.slice(-9, -5));
// Expected output: "lazy"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//split

const str6 = 'The quick brown fox jumps over the lazy dog.';

const words = str6.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str6.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str6.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//startsWith

const str10 = 'Saturday night plans';

console.log(str10.startsWith('Sat'));
// Expected output: true

console.log(str10.startsWith('Sat', 3));
// Expected output: false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//substring
const str22 = 'Mozilla';

console.log(str22.substring(1, 3));
// Expected output: "oz"

console.log(str22.substring(2));
// Expected output: "zilla"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//toString

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//trim


const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//trim end
const greeting2 = '   Hello world!   ';

console.log(greeting2);
// Expected output: "   Hello world!   ";

console.log(greeting2.trimEnd());
// Expected output: "   Hello world!";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//trim start

const greeting1 = '   Hello world!   ';

console.log(greeting1);
// Expected output: "   Hello world!   ";

console.log(greeting1.trimStart());
// Expected output: "Hello world!   ";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//valueOf();

const stringObj2 = new String('foo');

console.log(stringObj2);
// Expected output: String { "foo" }

console.log(stringObj2.valueOf());
// Expected output: "foo"

