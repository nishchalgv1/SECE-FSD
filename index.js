let string = "Hello";
console.log(string);

// let string = "World";
// console.log(string);

// variables declared with let can not be redeclared

var string1 = "Hey there!";
console.log(string1);

var string1 = "How are you?";
console.log(string1);

// variables decalared with var can be redeclared;
string1 = "Hello Javascript!";
console.log(string1);

// variables declared with var keyword can be re-assigned


let num = 10;
console.log(num);

num = 20;
console.log(num);

// variables declared with let can be re-assigned

// let num = 20;
// console.log(num);


// const -- constant
const number = 100;
// number = 200;
console.log(number);

// Syntax Error - when you try to redeclare the variable
// Type Error - you get it when you try to re-assign the value
// in const
// const number = 200;
// console.log(number);

// variables declared with const can not be
// redeclared

let nums = [1, 2, 3, 4, 5];
nums = 12.234;
nums = "This is a string";
nums = true;
nums = {
    name: "Mohan",
    age: 20
};
console.log(nums);




