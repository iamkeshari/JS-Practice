/*

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/


/*1.Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World 

const capitalizedFirstLetter = (inputString) =>{
    let convertedArray = inputString.split(' ');
    let convertedMap = convertedArray.map(
        (currItem) => currItem[0].toUpperCase() + currItem.slice(1)
    );

let resultString = convertedMap.join(' ');
console.log(convertedArray);
console.log(convertedMap);
console.log(resultString);

};
capitalizedFirstLetter ('hello World') */


const capitalizedFirstLetter = (inputString) =>
    
    inputString
    .split(' ')
    .map((currItem) => currItem[0].toUpperCase() + currItem.slice(1))
    .join(' ');

console.log(capitalizedFirstLetter('hello world'));

/*
Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH
*/


const reverseStringWithCase = (inputString) => {
    let inputArray = inputString.split('');
    console.log('InputArray',inputArray);

    let reversalArray = inputArray.reverse();
    console.log('reversalArray',reversalArray);

    let Output = reversalArray.join('');
    console.log('Output',Output);

    let result = inputString.split('').reverse().join('');
    console.log(result);
    
       
}
reverseStringWithCase('Hello World');

/*3.Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/

const countCharacters = (inputString) => {
    let Output= {}
    console.log(inputString.split(''));
      
let inputArray = inputString.split('');
     for (let currItem of inputArray) {
        console.log(currItem);
        if (Output.hasOwnProperty(currItem)) {
            Output[currItem] = Output[currItem] + 1;
        } else {
            Output[currItem] = 1;
        }    
    }
   console.log('Output', Output);
    
    
};
countCharacters('hello');

/* 4.Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ */

const generateUserName = (inputString) =>{
    let UpperCase = inputString.toUpperCase();
    console.log('UpperCase',UpperCase);
    let inputArray = UpperCase.split(' ');
    console.log('inputArray',inputArray);
    let initialsArray = inputArray.map((currItem) => currItem[0]);
    console.log('initialsArray',initialsArray);
    
    let Output = initialsArray.join('');
    console.log('Output',Output);
    
}
generateUserName('ankit Dilipji Jain');

/*
5. Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.
Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

*/