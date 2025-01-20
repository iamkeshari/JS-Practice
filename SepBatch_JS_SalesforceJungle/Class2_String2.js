let myDetails = 'My Name is Biplab';

//length
console.log(myDetails.length);

//Extracting the string

let text = 'Apple , Banana , kiwi'
console.log(text);

//Slice(StartPosition , End Position + 1)
//subString(Start Position , end)
//substr(start position , length)

let sliceBanana = text.slice(7, 14)
console.log(sliceBanana);

let sliceRemaining = text.slice(7)
console.log(sliceRemaining);

//Replace
const paragraph16 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph16.replace("Ruth's", 'my'));

//upercase and lowercase
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

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
