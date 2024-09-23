let student1 = {'Name':'Sonia','Age':24, 'feesPaid': 'True' , 'Street':'Bamnipal', 'class':undefined, 'Pincode':13444};
let student2 = {'Name':'Manoj', 'Age':26,'feesPaid': 'False' , 'Street':'Bhubaneswar', 'class':undefined, 'Pincode':5124};
let student3 = {'Name':'Rohan', 'Age':27,'feesPaid': 'False' , 'Street':'jajpur', 'class':undefined, 'Pincode':2344};
let student4 = {'Name':'Biplab', 'Age':27,'feesPaid': 'True' , 'Street':'Puri', 'class':undefined, 'Pincode':134};

let students = [student1,student2,student3,student4];
console.log(students);

let filterStudents = students.filter(x =>{  //Filter the data
    return x.Age === 27;
})

console.log(filterStudents);

let mapFilter = students.filter(x=> {
    return x.Age ===27;
}).map(x => {
    return{ 'StudName': x.Name, 'Age':x.Age}
})
console.log(mapFilter);