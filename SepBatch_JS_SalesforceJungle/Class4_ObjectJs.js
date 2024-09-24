// objects

/*
let Student1 = {'Name':'Sonia', 'Age':24, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz','Pincode':13444}};
let Student2 = {'Name':'Manoj', 'Age':28, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz23','Pincode':1455}};
let Student3 = {'Name':'Rohan', 'Age':27, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1234}};
let Student4 = {'Name':'Biplab', 'Age':25, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz133','Pincode':144}};
let Student5 = {'Name':'Aditya', 'Age':23, 'class':undefined, 'fees Paid': 'False', 'Address':{'Street':'xyz234','Pincode':1674}};
let Student6 = {'Name':'Kumar', 'Age':29, 'class':undefined, 'fees Paid': 'True', 'Address':{'Street':'xyz456','Pincode':1677}};
let Students = [Student1,Student2,Student3,Student5,Student6];
console.log(Students);
console.log(Students[2].Address.Street);

let student = {'Name': 'Biplab', 'Age':26 , 'Class': 'undefined ', 'Address':{'Street':'Nandala' , 'Pincode':'752030'}};
let student1 = {'Name': 'Chinnmay', 'Age':21 , 'Class': 'undefined ', 'Address':{'Street':'Kanahaipur' , 'Pincode':'752030'}};
let student3 = {'Name': 'Babulu', 'Age':27 , 'Class': 'undefined ', 'Address':{'Street':'Nandala' , 'Pincode':'752030'}};
let student4 = {'Name': 'Maheswari', 'Age':28 , 'Class': 'undefined ', 'Address':{'Street':'Kanahaipur' , 'Pincode':'752030'}};
let students = [student,
                {'Name':'Vinay','Age':25, 'Class':'Undefinrd'},
               student1,student3,student4];
console.log(students);
console.log(students[1].Name);
*/


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

/////////////////////////////////////////////////////////////////////////////////

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"

  //////////////////////////////////////////////////////////////////////////////

  const object11 = {};

Object.defineProperty(object11, 'property1', {
  value: 42,
  writable: false,
});

object11.property1 = 77;
// Throws an error in strict mode

console.log(object11.property1);
// Expected output: 42

  //////////////////////////////////////////////////////////////////////////////

  const object10 = {
    a: 'somestring',
    b: 42,
  };
  
  for (const [key, value] of Object.entries(object10)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"
  //////////////////////////////////////////////////////////////////////////////

  const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42

////////////////////////////////////////////////////////////////////////////////

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }

/////////////////////////////////////////////////////////////////////////////
const object1 = {
    property1: 42,
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1.configurable);
  // Expected output: true
  
  console.log(descriptor1.value);
  // Expected output: 42
  
/////////////////////////////////////////////////////////////////////////////
const object2 = {
    property1: 42,
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object2);
  
  console.log(descriptors1.property1.writable);
  // Expected output: true
  
  console.log(descriptors1.property1.value);
  // Expected output: 42
  
/////////////////////////////////////////////////////////////////////////////


const object3 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(Object.getOwnPropertyNames(object3));
  // Expected output: Array ["a", "b", "c"]

  /////////////////////////////////////////////////////////

const prototype1 = {};
const object16 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object16) === prototype1);
// Expected output: true
  /////////////////////////////////////////////////////////
  const object18 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object18, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object18, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object18, 'undeclaredPropertyValue'));
  // Expected output: false
 //////////////////////////////////////////////////////////////////////////////////
 
 console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
///////////////////////////////////////////////////////

const object17 = {};

console.log(Object.isExtensible(object17));
// Expected output: true

Object.preventExtensions(object17);

console.log(Object.isExtensible(object17));
// Expected output: false

////////////////////////////////////////////////////////

const object13 = {
    property1: 42,
  };
  
  console.log(Object.isFrozen(object13));
  // Expected output: false
  
  Object.freeze(object13);
  
  console.log(Object.isFrozen(object13));
  // Expected output: true

  ////////////////////////////////////////////////////////

  const object21 = {
    property1: 42,
  };
  
  console.log(Object.isSealed(object21));
  // Expected output: false
  
  Object.seal(object21);
  
  console.log(Object.isSealed(object21));
  // Expected output: true
/////////////////////////////////////////////////////////////  
  

const object221 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object221));
  // Expected output: Array ["a", "b", "c"]
  /////////////////////////////////////////////////////////////////

  const object100 = {};

Object.preventExtensions(object100);

try {
  Object.defineProperty(object100, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const object187 = {
    property1: 42,
  };
  
  Object.seal(object187);
  object187.property1 = 33;
  console.log(object187.property1);
  // Expected output: 33
  
  delete object187.property1; // Cannot delete when sealed
  console.log(object187.property1);
  // Expected output: 33
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const object199 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object199));
  // Expected output: Array ["somestring", 42, false]
  