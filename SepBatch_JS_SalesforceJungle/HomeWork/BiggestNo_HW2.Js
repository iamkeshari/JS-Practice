// HW:2 Take five numbers and compare them to find biggest number by using ternary operator

let num1 = 10;
let num2 = 20;
let num3 = 688;
let num4 = 244;
let num5 = 40;

/*let  Greatest = num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ? 'num 1':
              num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 ? 'num 2':
              num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 ? 'num 3':
              num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 ? 'num 4': 'num 5';

console.log("The Greatest number is: " + Greatest); */


let  Greatest = num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ? 'num 1':
              num2 > num3 && num2 > num4 && num2 > num5 ? 'num 2':
              num3 > num4 && num3 > num5 ? 'num 3':
              num4 > num5 ? 'num 4': 'num 5';

console.log("The biggest number is: " + Greatest);



