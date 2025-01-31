let student1 = {'Name':'Sonia','Age':24, 'feesPaid': 'True' , 'Street':'Bamnipal', 'class':undefined, 'Pincode':13444};
let student2 = {'Name':'Manoj', 'Age':26,'feesPaid': 'True' , 'Street':'Bhubaneswar', 'class':undefined, 'Pincode':5124};
let student3 = {'Name':'Rohan', 'Age':27,'feesPaid': 'True' , 'Street':'jajpur', 'class':undefined, 'Pincode':2344};
let student4 = {'Name':'Biplab', 'Age':28,'feesPaid': 'True' , 'Street':'Puri', 'class':undefined, 'Pincode':134};

let students = [student1,student2,student3,student4];
console.log(students);
 
let mapStudent = students.map( str => {
    return {'Student Name':str.Name, 'Street ':str.Street};
})

console.log(mapStudent);

console.log('Map Collections');
/*
method
newMap() ----> create the Map
map.set(Key,Values)---> stores the value by the key
map.get(Key) -----> returns the values by the key , undefined if key doesn't exist in map.
map.has(Key) -----> returns these if the key exists. false otherwise.
map.delete(Key) ---> remove the element (thekey/valuepair) by the key.
map.clear()-----> removes everything from the Map.
map.size()-----> returns the current elememnt count.

*/


let myMap = new Map();
console.log('myMap', myMap);

// To add entries in the map
myMap.set('1', 'Ankit');
myMap.set(2, 50);
myMap.set(true, 'Trainer');
console.log('myMap', myMap);

//to access the value from map

console.log(myMap.get('1'));
console.log(myMap.get(true));
console.log(myMap.size);

let favPlace = new Map([
    ['Jaipur', 'Place'],
    ['pune', 'fort'],
    ['Goa', 'Beaches'],
]);
console.log('FavPlaces' , favPlace);

//iteration
for(let[key,value] of favPlace){
    console.log(key,value);
    
}

for(let currItem of favPlace.keys()){
    console.log(currItem);
    
}
for(let currItem of favPlace.values()){
    console.log(currItem);
    
}
