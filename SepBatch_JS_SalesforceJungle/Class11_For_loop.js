let student = {'Name': 'Biplab', 'Age':26 , 'Class': 'undefined ', 'Address':{'Street':'Nandala' , 'Pincode':'752030'}};
let student1 = {'Name': 'Chinnmay', 'Age':21 , 'Class': 'undefined ', 'Address':{'Street':'Kanahaipur' , 'Pincode':'752030'}};
let student3 = {'Name': 'Babulu', 'Age':27 , 'Class': 'undefined ', 'Address':{'Street':'Nandala' , 'Pincode':'752030'}};
let student4 = {'Name': 'Maheswari', 'Age':28 , 'Class': 'undefined ', 'Address':{'Street':'Kanahaipur' , 'Pincode':'752030'}};
let students = [student,
                {'Name':'Vinay','Age':25, 'Class':'Undefinrd'},
               student1,student3,student4];
console.log(students);
console.log(students[1].Name);

let index =0;

let checkCondition = (index) => {
    return index < 50;
}

let incre = (i)=>{
    i+=5;
    return i;
}


for (index ; checkCondition(index); index = incre(index)) {
 console.log(index);
 
    
}

//Using For Each

students.forEach((stud) =>{
    console.log(stud);
    
})


let myFavCars = ['Audi', 'BMW','Maruti','Mercedeze'];
//for each(initialization, condition , increment/decrement)

for(let i=0; i<myFavCars.length; i++){
    console.log(`${i+ 1}. ${myFavCars[i]} `);
    
}
