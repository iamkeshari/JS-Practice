// Functions
/*
1.Function without Parameters
2.Function with Parameters
3.Functions with Return Type
4. Void Functions */

/*
 function greetStudents(StudentName){
    console.log('Hello'+ StudentName);
}

greetStudents('Biplab');

function greetStudents(StudentName){
return 'Hello' +' '+  StudentName;
}

console.log(greetStudents ('Biplab'));

//Update

let greetStudents1= function (StudentName){
    return 'Hello' +' '+  StudentName;
    }
    
    console.log(greetStudents1 ('Keshari'));

// Latest
let greetStudents2= (StudentName) => {
    return 'Hello' +' '+  StudentName;
    }
    
    console.log(greetStudents2 ('Rananayak'));
  
==========================================================
*/ 

function greetStudent2 (name){
    console.log(`Good Morning, ${name}`);  //void with parameter
}
function greetStudents (){
     return `Good Morning Everyone`;  //without  parameter with return
}
greetStudent2('Biplab');
console.log(greetStudents());


let arrowfunction =  () => {
    return `Good Morning Everyone`;  //without  parameter with return
}
console.log(arrowfunction());

let arrowfunction1 =  (name) => {
    console.log(`Good Morning, ${name}`);  
}
arrowfunction1('Biplab'); // ethi call karibaku pade 


//Function Declaration

// Function Declaration
function calc1(number1, number2) {
    let sum = number1 + number2;
    return sum;
};

// Function Expression
let calc2 = function (number1, number2) {
    let sum = number1 + number2;
    return sum;
};

let calc1Result = calc1(15, 20);
console.log('calc1Result', calc1Result);

let calc2Result = calc2(33, 20);
console.log('calc2Result', calc2Result);

//Call Back Functions
function welcomeMe(name,callMe){
    console.log(`hello ${name}`);
    
}
function greetMeToo(){
    console.log(`Welcome My Js Practice`);
    
}
function goodBye(){
    console.log(`See You in Tommorrow`);
    
}
welcomeMe('Biplab',greetMeToo);
welcomeMe('Biplab',goodBye);
