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

greetStudents('Biplab');*/

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
    
    console.log(greetStudents1 ('Rananayak'));