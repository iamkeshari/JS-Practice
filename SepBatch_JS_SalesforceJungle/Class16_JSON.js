let student1 = {'Name':'Sonia','Age':24, 'feesPaid': 'True' , 'Street':'Bamnipal', 'class':undefined, 'Pincode':13444};
let student2 = {'Name':'Manoj', 'Age':26,'feesPaid': 'True' , 'Street':'Bhubaneswar', 'class':undefined, 'Pincode':5124};
let student3 = {'Name':'Rohan', 'Age':27,'feesPaid': 'True' , 'Street':'jajpur', 'class':undefined, 'Pincode':2344};
let student4 = {'Name':'Biplab', 'Age':28,'feesPaid': 'True' , 'Street':'Puri', 'class':undefined, 'Pincode':134};

students = [student1,student2,student3,student4];
console.log(students);

let JSONStudents = JSON.stringify(students);  // Convert into JSON Format.
console.log(JSONStudents);   

let normalizeStudents = JSON.parse(JSONStudents);
console.log(normalizeStudents);
