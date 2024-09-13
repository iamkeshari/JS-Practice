/* Create an array of object with 10 objects with name and age then create another arrray of object age 
wise student name should display in group
[{Saurabh:20},{Maheshwari:25},{Pratiksha:30},{Nilesh:20},{Aaditya:25},{Priyanka:30}]

{20:'Nilesh,Saurabh',25:'Maheshwari,Aaditya',30:'Pratiksha,Priyanka'} */

// Array of objects with name and age
const Students = [{ name: 'Saurabh', age: 20 }, { name: 'Maheshwari', age: 25 },{ name: 'Pratiksha', age: 30 }, { name: 'Nilesh', age: 20 },{ name: 'Aaditya', age: 25 },{ name: 'Priyanka', age: 30 }];
console.log(Students);
let newstudent = {};

for (let i = 0; i < Students.length; i++) {
    const {name, age} = students[i];
    newstudent[age] = (newstudent[age] || '') + (newstudent[age] ? "," : "") + name;
}

console.log(newstudent);