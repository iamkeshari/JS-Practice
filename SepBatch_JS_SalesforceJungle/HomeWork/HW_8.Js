/* let arr=[10,20,30,40,8,45] ; 
output would be [15,40,65,90,73,?]

Map
Array */

let array = [10, 20, 30, 40, 8, 45];
let a = 5;

let result = array.map((val) => {
    let sum = val + a;
    a += 15;
    return sum;
});

console.log(result);

/*for each */
let re=[];
let b = 5;
let arrr = [10, 20, 30, 40, 8, 45];

arrr.forEach ((x) =>{
    re=([x+b]);
    (b+=15);
    console.log(re);

});