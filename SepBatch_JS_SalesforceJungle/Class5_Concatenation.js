let Student1 = {'Name':'Sonia', 'Age':24, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz','Pincode':13444}};
let Student2 = {'Name':'Manoj', 'Age':28, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz23','Pincode':1455}};
let Student3 = {'Name':'Rohan', 'Age':27, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1234}};
let Student4 = {'Name':'Biplab', 'Age':25, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz133','Pincode':144}};
let Student5 = {'Name':'Aditya', 'Age':23, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1674}};
let Student6 = {'Name':'Kumar', 'Age':29, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz456','Pincode':1677}};
let Students = [Student1,Student2,Student3,Student5,Student6];
console.log(Students);

// Concatenation 

let concat1 = 'Hello' + Student1.Name;
console.log(concat1);

let concat2 = `Hello ${Student2.Name}`;
console.log(concat2);

let result1 = 'Hello Everyone, ' + Students[3].Name+ ' got good marks';
let result2 = `Hello Everyone ${Student3.Name} got good marks`;
console.log(result1);
console.log(result2);