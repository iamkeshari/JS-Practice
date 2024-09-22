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

function greetStudent2 (name){
    console.log(`Good Morning, ${name}`);  //void with parameter
}
function greetStudents (){
     return `Good Morning Everyone`;  //without  parameter with return
}
greetStudent2('Biplab');
console.log(greetStudents());

*/
let greetletStudents =  () => {
    return `Good Morning Everyone`;  //without  parameter with return
}
console.log(greetletStudents());

let greetletStudents1 =  (name) => {
    console.log(`Good Morning, ${name}`);  
}
greetletStudents1('Biplab'); // ethi call karibaku pade 

