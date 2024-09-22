let index =0;

let checkCondition = (index) => {
    return index < 50;
}

let incre = (i)=>{
    i+=5;
    return i;
}


for (index ; checkCondition(index); index = incre(index)) {
 console.log(index);
 
    
}