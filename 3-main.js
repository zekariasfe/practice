const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += ' JS IS AWESOME'

/*const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += 'new text'
})*/

const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML += '<h2>THIS IS NEW</h2>'
 

// DESTRUCTURING

const person ={
    fname: 'bob',
    age: 30,
    profession: 'developer',
};
const {fname, age, profession} = person;

console.log(`My name is ${fname}, I am ${age} years old and I am a ${profession}.`);

// array example
const nums = [1,2,3,4,5];
nums.push(6);
nums.shift();
console.log(nums);

function filterEvenNums(arr){
    const evenNumbers=[];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const result = filterEvenNums(nums);
console.log(result);