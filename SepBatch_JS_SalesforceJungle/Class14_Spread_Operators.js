let student1 = {'Name':'Sonia','Age':24, 'feesPaid': 'True' , 'Street':'Bamnipal', 'class':undefined, 'Pincode':13444};
let student2 = {'Name':'Manoj', 'Age':26,'feesPaid': 'True' , 'Street':'Bhubaneswar', 'class':undefined, 'Pincode':5124};
let student3 = {'Name':'Rohan', 'Age':27,'feesPaid': 'True' , 'Street':'jajpur', 'class':undefined, 'Pincode':2344};
let student4 = {'Name':'Biplab', 'Age':28,'feesPaid': 'True' , 'Street':'Puri', 'class':undefined, 'Pincode':134};
let students = [student1,student2,student3,student4];

let Student1New = {'Name':'Rohan', 'Age':27, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1234}};
let Student2New = {'Name':'Biplab', 'Age':25, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz133','Pincode':144}};
let Student3New = {'Name':'Aditya', 'Age':23, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1674}};
let studentsNew = [Student1New,Student2New,Student3New];

let allStudents = [...studentsNew,...students]; // add 2 array in single array
console.log(allStudents);

/* Tech Journey - Youtube Channel */
console.log('Spread Operator in JavaScript');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log('Combined Array:', combinedArr);

// Expand the string
let myName = 'My Name is Biplab ';
console.log(myName);
console.log(...myName);

//add element in array
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6,];
console.log('New Array:', newArr);

let newArr2 = [20,21,22,...arr];
console.log('New Array 2:', newArr2);


//adding elements of one object to another object
let obj1 = {'Name':'Sonia','Age':24, skills:['Java','JavaScript']};
let obj2 = { lNamec:'Jain' ,country: 'India' };
let combinedObj = { ...obj1, ...obj2 };
console.log('Combined Object:', combinedObj);

//copy on array and object
let myfruits = ['apple', 'banana', 'mango'];
let copiedFruits = myfruits;

let copiedFruits2 = [...myfruits]; 
console.log('myfruits:', copiedFruits2); 

console.log('Copied Fruits:', copiedFruits);

copiedFruits.push('orange');
console.log('After adding orange to copiedFruits');
console.log('myfruits:', myfruits);  //deep copy
console.log('copiedFruits:', copiedFruits);