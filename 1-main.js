// regular function
/*const calcArea = function(radius){
    return 3.14 * radius **2;
    
};*/


// arrow function

//const calcArea = (radius) => 3.14 * radius **2;
    

//const greet = () => 'hello, world';

//const area = calcArea(9);
//console.log('area is:', area);


//const result = greet();
//console.log(result);


/*const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

const totals = bill([10, 15, 30], 0.2);
console.log(totals);    

let people =['mario', 'luigi', 'peach', 'toad'];

const logPerson = (person, index) => {
    console.log(`${index} - Hello ${person}`);
}
people.forEach(logPerson);*/

let number = prompt("Enter a number");
if (number > 0){
 
    console.log(`the number ${number} is positive`); // result);
}
else if(number < 0){
    console.log(`the number ${number} is negative`); // result);
}
else{
    console.log(`the number ${number} is zero`); // result);
}

for(let i = 0; i < 10; i++){
    console.log(i);
}