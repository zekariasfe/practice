/*console.log("Hello, World!");

let fname='zak';
let age=30;

let isStudent=true;
let address={city: "addis ababa", country: "ethiopia"};
let hobbies=["reading", "playing", "coding"];
let udefinedVariable;
let nullVariable=null;
console.log(fname, typeof(fname));
console.log(age, typeof(age));
console.log(isStudent, typeof(isStudent));
console.log(address, typeof(address));
console.log(hobbies, typeof(hobbies));
console.log(udefinedVariable, typeof(udefinedVariable));
console.log(nullVariable, typeof(nullVariable));        */
let username = prompt("Enter your name");
let age=prompt("Enter your age");
let date=new Date().getFullYear();
let yearOfBirth = date - age;
//console.log(username, age, date, yearOfBirth);
alert(`Hello ${username}, you were born in ${yearOfBirth}`);
//console.log(date, typeof(date));
