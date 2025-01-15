console.log('Set Collections');

/*
//Set Collections

newSet() - Create a new Set.
add() - Adds a new element to the set
delete() - Removes an element from Set
has() - return true if a value exists
clear() - Removes all elements from set


*/

let mySet = new Set();
console.log('My Set ', mySet);

mySet.add('Burger');
mySet.add('Burger');
mySet.add('Pizza');
mySet.add('Sandwich');
mySet.add('Ghar Ka Khana');
mySet.add('Pizza');
mySet.add('Burger');

console.log(mySet);

//check if Sandwich is present in Set
console.log(mySet.has('Sandwich'));
console.log(mySet.has('Chinese Food'));
mySet.delete('Sandwich');
console.log('My Set',mySet);

let myFavCities = new Set(['Bangalore ','Pune', 'Hyderabad', ' Bhubaneswar']);
console.log(myFavCities);

//Iterations

for(let currItem of myFavCities){
  console.log(currItem);
    
}