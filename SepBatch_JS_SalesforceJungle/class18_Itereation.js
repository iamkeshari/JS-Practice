let bankingTransaction = [5000,-7000,9000,-4000,2000];
console.log('bankingTransaction', bankingTransaction);

/*forEach((CurrItem, index,originalArray) =>{
    
})*/

bankingTransaction.forEach((CurrItem) => {
    CurrItem = CurrItem / 10;
});

let updatedarray = bankingTransaction.map((CurrItem) => {

    return CurrItem / 10 
});
console.log(updatedarray);


//get all the deposit  
let depositArray = bankingTransaction.filter((CurrItem) => CurrItem > 0);
console.log('depositArray',depositArray);

 let withdrawalArray = bankingTransaction.filter((CurrItem) => CurrItem < 0  );
 console.log('withdrawalArray',withdrawalArray);