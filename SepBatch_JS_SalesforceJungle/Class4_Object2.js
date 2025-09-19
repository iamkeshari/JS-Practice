console.log('Objects in JavaScript');

let myDetails = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    hobbies: ['reading', 'traveling', 'gaming'],
}
console.log(myDetails);
console.log(typeof myDetails);

// Convert the object to string
let jsonstring = JSON.stringify(myDetails);
console.log('json String', jsonstring);
console.log('type of jsonString',typeof jsonstring);

// json.parse() - convert string to object
let obj = JSON.parse(jsonstring);
console.log('obj', obj);
console.log('type of obj', typeof obj);

//modify object
myDetails.dob = '01-01-1990';
console.log('after adding dob', myDetails);

myDetails.age = 31;
console.log('after modifying age', myDetails);
myCountry = 'country';  

myDetails[myCountry] = 'USA';
console.log('after adding country', myDetails);

myDetails['City Name'] = 'New York';
console.log('after adding city name', myDetails);

//access object values
console.log('accessing fname', myDetails.fname);
console.log('accessing lname', myDetails['lname']);
console.log('accessing age', myDetails.age);