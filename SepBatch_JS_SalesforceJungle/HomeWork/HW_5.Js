/* WRITE AN ARRAY OF STRING. ArrObj = [{Name : 'Manoj',Age : 25},{Name : 'Reena',Age : 22}];
console.log(ArrObj);
Result should be [{Manoj:25},{Reena:22}]

Map
For Loop
output should be in array of object */

let stud1 = {'Name':'Sonia','Age':24, 'feesPaid': 'True' , 'Street':'Bamnipal', 'class':undefined, 'Pincode':13444};
let stud2 = {'Name':'Manoj', 'Age':26,'feesPaid': 'False' , 'Street':'Bhubaneswar', 'class':undefined, 'Pincode':5124};
let stud3 = {'Name':'Rohan', 'Age':27,'feesPaid': 'False' , 'Street':'jajpur', 'class':undefined, 'Pincode':2344};
let stud4 = {'Name':'Biplab', 'Age':27,'feesPaid': 'True' , 'Street':'Puri', 'class':undefined, 'Pincode':134};

let students1 = [stud1,stud2,stud3,stud4];

students1.forEach((X) =>{
    console.log(X.Name,X.Age);
});

let mapuse = students1.map( x => {
    return {[x.Name]: x.Age};

})
console.log(mapuse);