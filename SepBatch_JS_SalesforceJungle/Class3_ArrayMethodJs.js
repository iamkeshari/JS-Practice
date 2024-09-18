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

////////////////////////////////////////////////////////////////////////////////////////////////////

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

////////////////////////////////////////////////////////////////////////////////////////////////////
const array10 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array10.findIndex(isLargeNumber));
// Expected output: 3
////////////////////////////////////////////////////////////////////////////////////////////////////

const array012 = [5, 12, 50, 130, 44];

const isLargeNumber1 = (element) => element > 45;

console.log(array012.findLastIndex(isLargeNumber1));
// Expected output: 3
// Index of element with value: 130

////////////////////////////////////////////////////////////////////////////////////////////////////

const arr1111 = [0, 1, 2, [3, 4]];

console.log(arr1111.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr211 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr211.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr211.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr211.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

////////////////////////////////////////////////////////////////////////////////////////////////////

const arr111 = [1, 2, 1];

const result1 = arr111.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result1);
// Expected output: Array [1, 2, 2, 1]

////////////////////////////////////////////////////////////////////////////////////////////////////

const array0 = ['a', 'b', 'c'];

array0.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

////////////////////////////////////////////////////////////////////////////////////////////////////

const array00 = [1, 2, 3];

console.log(array00.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

////////////////////////////////////////////////////////////////////////////////////////////////////

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
////////////////////////////////////////////////////////////////////////////////////////////////////

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
////////////////////////////////////////////////////////////////////////////////////////////////////

const array5 = ['a', 'b', 'c'];
const iterator = array5.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2

////////////////////////////////////////////////////////////////////////////////////////////////////
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

////////////////////////////////////////////////////////////////////////////////////////////////////

const array99 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array99.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

////////////////////////////////////////////////////////////////////////////////////////////////////
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

////////////////////////////////////////////////////////////////////////////////////////////////////

const animals6 = ['pigs', 'goats', 'sheep'];

const count5 = animals.push('cows');
console.log(count5);
// Expected output: 4
console.log(animals6);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals6.push('chickens', 'cats', 'dogs');
console.log(animals6);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

////////////////////////////////////////////////////////////////////////////////////////////////////
const array100 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array100.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
////////////////////////////////////////////////////////////////////////////////////////////////////

const array14 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result4 = array14.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result4);
  // Expected output: Array [4, 5, 2, 3, 0, 1]
  ////////////////////////////////////////////////////////////////////////////////////////////////////

const array4 = ['one', 'two', 'three'];
console.log('array1:', array4);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array4.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array4);
// Expected output: "array1:" Array ["three", "two", "one"]

////////////////////////////////////////////////////////////////////////////////////////////////////

const array88 = [1, 2, 3];

const firstElement = array88.shift();

console.log(array88);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

////////////////////////////////////////////////////////////////////////////////////////////////////

const animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals3.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals3.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals3.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals3.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals3.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals3.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

////////////////////////////////////////////////////////////////////////////////////////////////////

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

////////////////////////////////////////////////////////////////////////////////////////////////////
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array01 = [1, 30, 4, 21, 100000];
array01.sort();
console.log(array01);
// Expected output: Array [1, 100000, 21, 30, 4]

////////////////////////////////////////////////////////////////////////////////////////////////////
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months1);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months1.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months1);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

////////////////////////////////////////////////////////////////////////////////////////////////////
const array16 = ['a', 'b', 'c'];
const iterator16 = array16[Symbol.iterator]();

for (const value of iterator16) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

////////////////////////////////////////////////////////////////////////////////////////////////////
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////

const months7 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months7.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months7); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2

////////////////////////////////////////////////////////////////////////////////////////////////////
const months0 = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months02 = months0.toSpliced(1, 0, "Feb");
console.log(months02); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months03 = months02.toSpliced(2, 2);
console.log(months03); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months04 = months03.toSpliced(1, 1, "Feb", "Mar");
console.log(months04); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months0); // ["Jan", "Mar", "Apr", "May"]
////////////////////////////////////////////////////////////////////////////////////////////////////
const array001 = [1, 2, 'a', '1a'];

console.log(array001.toString());
// Expected output: "1,2,a,1a"

////////////////////////////////////////////////////////////////////////////////////////////////////
const array0001 = [1, 2, 3];

console.log(array0001.unshift(4, 5));
// Expected output: 5

console.log(array0001);
// Expected output: Array [4, 5, 1, 2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////
const array188 = ['a', 'b', 'c'];
const iterator8 = array188.values();

for (const value of iterator8) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]