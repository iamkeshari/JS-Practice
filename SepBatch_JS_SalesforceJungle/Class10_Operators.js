// Arithmatic 
/*
let a = 5;
let b = 7;
let c = '10';
let d = 15;

let add = a + b;
let mul = a*b;
let sub = a-b;
let div = a/b;
console.log(add);
console.log(mul);
console.log(sub);
console.log(div);
*/

//COMPOUND OPERATOR

let a = 5;
a = a + 10; 
let c = '10';
let d = 15;

console.log(a); // 15

a +=5;
console.log(a); //20

a++;  // 20 ---21
++a;  // 21 ---- 22
a--;  //22 ---21
--a;  //20---20
console.log(a++); //20 ---21

a += 10; 
console.log(++a);  // 31  ---

console.log(c + d); //1015
console.log(c - d); //-5
console.log(c * d); //150
console.log(c / d); //0.66

//Assignment Operator '='/'=='/'==='

//comparison Operator , > ,>=,<=,!=,==,===

let myNumber = 10;
let myNumber1 = 20;

console.log(myNumber > myNumber1);
console.log(myNumber1 > myNumber);

//Logical operator (&&,||,!)
console.log(true && false);
console.log(false && true);
console.log(myNumber > 0 && myNumber1 > 5);