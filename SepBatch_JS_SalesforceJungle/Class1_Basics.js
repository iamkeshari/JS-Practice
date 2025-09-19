/*alert('First Function') ;

Variables
1.Var (its like Global Specifier) - var keyword can be reassigned and re-declared.
2.let - let keyword can be updated but not re-declared.
3.const - const keyword cannot be updated or re-declared.

for (var index = 0; index < 5; index++) {
    console.log(index);   
}

console.log(index); */

//Data Type - String , Number , Boolean , Object, Array, Undefined 

let a1 = '123' ;  //string
let a2 = 1 ;    //Number
let a3 = true ;  //Bollean
let a4 ;         //Undefiend

// Types of Data Type
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);

//Type of console Tags
console.log('Test Log');
console.error('Test Log');
console.warn('Test Log');

let myName = 'Biplab Keshari' ;
 console.log('My Name is ' + myName);
 //updated
 myName = 'Biplab' ;
 console.log('My Name is ' + myName);

// let myName = 'Vinay' ; //Cannot be re-declared

const myLastName = 'Keshari' ;
console.log('My Last Name is ' + myLastName);
//myLastName = 'Biplab Keshari';
console.log('My Last Name is ' + myLastName); //Cannot be updated

const myObject = {
    firstName : 'Biplab',
    lastName  : 'Keshari',
    age       : 26
}

console.log(myObject);
myObject.age = 27 ; //Object value can be updated
myObject.lastName = 'Kumar'; 
console.log(myObject);

/*myObject = {
    firstName : 'Vinay',
    lastName  : 'Keshari',
    age       : 30
} //Object cannot be re-declared
console.log(myObject);*/

//Var
var myCity = 'Bangalore' ;
console.log('My City is ' + myCity);    
myCity = 'Hyderabad' ;
console.log('My City is ' + myCity);        
var myCity = 'Pune' ;
console.log('My City is ' + myCity);  //Var can be re-declared and updated