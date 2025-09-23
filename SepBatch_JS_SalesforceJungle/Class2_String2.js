let myDetails = 'My Name is Biplab';

//length
console.log(myDetails.length);

//Extracting the string
let text = 'Apple, Banana, kiwi'
console.log(text);

//Slice(StartPosition , End Position + 1)
//subString(Start Position , end)
//substr(start position , length)

let sliceBanana = text.slice(7, 14)
console.log(sliceBanana);

let sliceRemaining = text.slice(7)
console.log(sliceRemaining);

//slice with negative index start position
let part = text.slice(-1)
console.log(part);

//substring(start position, end)
//in substring if you pass negative index it will consider as 0
let subStringBanana = text.substring(7, 14)
console.log(subStringBanana);

let subStringRemaining = text.substring(-1)
console.log(subStringRemaining);

//substr(start position, length)
let subStrBanana = text.substr(7, 6)
console.log(subStrBanana);

//Replace
//replace - it will replace only first match
// replace is case sensitive
// replace will not modify the original string


const paragraph16 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph16.replace("Ruth's", 'my'));

//upercase and lowercase
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

//trim , trimStart , trimEnd
let myString = '       Hello World       ';
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());

//padStart , padEnd

let myNumber = '5';
console.log(myNumber.padStart(4,'*'));
console.log(myNumber.padEnd(4,'*'));

//Split ==> []
let mycsvDetails = 'Ankit, Amit,Biplab, keshari';
let splitss = mycsvDetails.split(',');
console.log(splitss);

//Convert array to String
//ToString ---> ,
//Join ----> decide separate
let Array1 = ['Ankit', 'Biplab', 'Keshari'];
let myToString = Array1.toString();
let myJoin = Array1.join(',')
console.log(myToString);
console.log(myJoin);

//Search the String (Search,Match)
//index of - return the index position of a string.
//includes - if present return true else false

let fruit = 'Apple, Banana , kiwi';
console.log(fruit);
console.log(fruit.indexOf('Apple'));
console.log(fruit.indexOf('Banana'));
console.log(fruit.includes('Banana'));
console.log(fruit.includes('Guava'));

//startsWith()
console.log(fruit.startsWith('Banana'));
console.log(fruit.startsWith('Apple'));

//EndsWith()
console.log(fruit.endsWith('Banana'));
console.log(fruit.endsWith('kiwi'));


//brek the string with array --->Split
//convert array into Set --> conversion
//Combine the set ---> Join

let myString1 = 'My name is Biplab Keshari. I live in Bangalore.';
let myArray = myString1.split(' ');
console.log(myArray);

let finalarray = [];
myArray.map((currentItem) => {
    if (!finalarray.includes(currentItem)) {
        finalarray = [...finalarray, currentItem];
    } 
});
console.log(finalarray.join);  