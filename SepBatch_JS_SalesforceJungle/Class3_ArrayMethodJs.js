let Array1 =['Manoj','Vinay','Santosh','Tapan'];

console.log(Array1);   // List of array [ 'Manoj', 'Vinay', 'Santosh', 'Tapan' ]
console.log(Array1[2]); //Santosh

Array1.push('Priyanka'); //add the Value  output - [ 'Manoj', 'Vinay', 'Santosh', 'Tapan', 'Priyanka' ]
console.log(Array1);

Array1[2]='Madhav'; //Replace the value  output- [ 'Manoj', 'Vinay', 'Madhav', 'Tapan', 'Priyanka' ] 
console.log(Array1);


////////////////////////////////////////////////////////////////////////////////////////////////////////

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

////////////////////////////////////////////////////////////////////////////////////////////////////////
const array11 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array11.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

////////////////////////////////////////////////////////////////////////////////////////////////////

const array12 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array12.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array12.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

////////////////////////////////////////////////////////////////////////////////////////////////////

const array122 = ['a', 'b', 'c'];

const iterator1 = array122.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
////////////////////////////////////////////////////////////////////////////////////////////////////

const isBelowThreshold = (currentValue) => currentValue < 40;

const array13 = [1, 30, 39, 29, 10, 13];

console.log(array13.every(isBelowThreshold));
// Expected output: true

////////////////////////////////////////////////////////////////////////////////////////////////////

const array15 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array15.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array15.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
