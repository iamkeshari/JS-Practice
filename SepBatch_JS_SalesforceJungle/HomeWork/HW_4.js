/* "Write a code to print the length of the string using loop and
 without using inbuilt length method. " */

let stringname = 'Biplabghg';
let strarr = Array.from(stringname);
let len = 0;

for(let l of strarr){
   len++;
}

console.log(`Length of String: ${len}`);
