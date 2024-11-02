//Task 1
const para = document.getElementById("greeting");
para.textContent = 'Hello, DOM!';

 //Task 2
const clkbtn = document.getElementById("clickButton");

clkbtn.addEventListener('click', () => {
    clkbtn.innerHTML = 'Clicked!'});

//Task 3
const ul = document.querySelector('ul');

ul.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
});

ul.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'lightblue';
});