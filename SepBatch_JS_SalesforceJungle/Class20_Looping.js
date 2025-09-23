/* Ankit Tech Journey - Youtube Channel */
/**********LOOPING STATEMENT */

let myDetails = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
}

//for each(initialization, condition , increment/decrement)
let myFavCars = ['Audi', 'BMW','Maruti','Mercedeze'];

for(let i=0; i<myFavCars.length; i++){
    console.log(`${i+ 1}. ${myFavCars[i]} `);
    
}

//While While loop
let currentIndex =0;
while(currentIndex < myFavCars.length){
    console.log(`${currentIndex + 1}. ${myFavCars[currentIndex]} `);
    currentIndex++;
}

//Do While loop
do{
    console.log('Inside do while loop');

}while(1===2);

//for of loop //Itteration
for(let car of myFavCars){
    console.log(car);
}
//index and item both (entries() method)
for(let car of myFavCars.entries()){
    console.log(car);
}

for(let [index,car] of myFavCars.entries()){
    console.log(`${index +1}. ${car}`);
}

/**
 * To make object iterable we have 3 major methods
 * 1. Object.keys() - return array of keys
 * 2. Object.values() - return array of values
 * 3. Object.entries() - return array of key value pair in array
 */
for(let key1 of Object.keys(myDetails)){
    console.log(key1);
}

for(let value1 of Object.values(myDetails)){
    console.log(value1);
}

for(let [key1,value1] of Object.entries(myDetails)){
    console.log(`${key1} : ${value1}`);
}

//for in loop
/**
 * for (let variablename in collection){
 * 
 */
//Array
for(let index in myFavCars){
    console.log(index);  // we are getting index only
    console.log(index, myFavCars[index]);// we are getting index and value both

}

//object
for(let key1 in myDetails){
    console.log(key1);  // we are getting key only
    console.log(key1, myDetails[key1]); // we are getting key and value both
}

let openingHours = {
    mon: {open: "9 AM", close:  "17 PM"},
    tue: {open: "10 AM", close: "18 PM"},
    wed: {open: "11 AM", close: "19 PM"},
};
for(let curritem in openingHours){
    console.log(curritem);
    console.log(openingHours[curritem]);
    let{open, close} = openingHours[curritem];
    console.log(open, close);   //destructuring
    console.log(`On ${curritem} we open at ${open} and close at ${close}`);
    
}


/**********for of Loop */

for(let [day, {open, close}] of Object.entries(openingHours)){
    console.log(day, open, close);
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

