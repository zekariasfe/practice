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

/*  *let number = prompt("Enter a number");
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
} */

    fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer <your_token>',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: 'John Doe',
            description: 'Impotant information'
        })
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    })

    async function fetchData() {
        try {
          const response = await fetch('https://api.example.com/data');
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json(); 
          console.log('Success:', data); 
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
     /*function getBoredActivity() {
        fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }

      getBoredActivity();*/

      /* async function getBoredActivity() {
       await fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }      
      
      getBoredActivity();  */


      function stepOne(value, callback) {
        setTimeout(() => {
          console.log(value);
          callback();
        }, 3000);
      }
      
      function stepTwo(value, callback) {
        setTimeout(() => {
          console.log(value);
          callback();
        }, 2000);
      }
      
      function stepThree(value, callback) {
        setTimeout(() => {
          console.log(value);
          callback();
        }, 1000);
      }

      stepOne(1, () => {
        stepTwo(2, () => {
          stepThree(3, () => {
            console.log('Done!');
          });
        });
      });

      // Promises
      function stepOne(value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(value);
            resolve();
          }, 3000);
        });
      }
      
      function stepTwo(value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(value);
            resolve();
          }, 2000);
        });
      }
      
      function stepThree(value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(value);
            resolve();
          }, 1000);
        });
    }
    
    stepOne(1)
    .then(() => stepTwo(2))
    .then(() => stepThree(3))
    .then(() => console.log('Done!'));

    const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.all([p1, p2, p3])
  .then(messages => console.log(messages))
  .catch(error => console.log(error));

   const runProcess = async () =>{
    try{
    const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch(error){
    console.log(error);
  }
}

  runProcess();