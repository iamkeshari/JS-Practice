/* let arr=[1,8,5,2,6,4,9,5,2,10]; 
output would be [1,9,13,7,8,10,13,14,7,12]

Strictly use Map
ForLoop */

let arr=[1,8,5,2,6,4,9,5,2,10];
let i=0;
console.log(arr);
let sum = (num) => {
        let num1 = num + i;
        i= num;
        return num1;
}
let maparr= arr.map(x => sum(x));
console.log(maparr);
let arr2=[];
let j=0;
arr.forEach((y) => {
        let op= y + j;
        j= y;
        arr2.push(op);
});
console.log(arr2);