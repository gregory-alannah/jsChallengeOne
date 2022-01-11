// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

//two varibles(integers) with the difference of both 
let numOne = 55; 
let numTwo = 15;
let difference = numOne - numTwo; 

console.log("The difference between " 
+ numOne + " and " + 
numTwo + " is " + difference); 


// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.  Example output: “The name Thomas is longer than John by 2 characters”

//two varibles(strings) with the length of first and last name 
let firstName = "Ruby"; 
let lastName = "Miller";
let lengthfirstName = firstName.length;
let lengthLastName = lastName.length;

console.log("The name " + lastName + " is longer than " + 
firstName + " by " + lengthLastName + " characters ");



// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let text = prompt("Please enter something"); 

//toLowerCase checks if the prompt is lowercase 
//toUpperCase checks if the prompt is uppercase 
//otherwise the prompt is normal 
if (text == text.toLowerCase()) {
    console.log("The user is whispering"); 
}

else if (text == text.toUpperCase()) {
    console.log("The user is yelling");
}

else {
    console.log("The user is speaking normally");
}

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

//functions that return addition, subtraction, multiplication, and division
function add (x, y) {
    if (add) {
        return x + y;
    }
} 

function subtract(x, y) {
    if (subtract) {
        return x - y;
    }
}

function multiply(x, y) {
    if (multiply) {
        return x * y;
    }
}

function divide(x, y) {
    if (divide) {
        return x / y;
    }
}

//testing if functions work 
console.log(add(3, 15)); 
console.log(subtract(3, 15)); 
console.log(multiply(3, 15)); 
console.log(divide(15, 3)); 


// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

//using parseInt to produce a integer rather than a string 
let firstNumber = parseInt(prompt("Enter first number"));  /* */
let secondNumber = parseInt(prompt("Enter a second number")); 
// creating prompt for user to select different operators 
let operators = prompt("Choose a operator ")

// declaring operators for each function
if (operators === "+") {
    function add() {
        result = firstNumber + secondNumber;
        return result;
    }
    add()
}

else if (operators === "-") {
    function subtract() {
        result = firstNumber - secondNumber;
        return result;
    }

    subtract()
}

else if (operators === "/") {
    function divide() {
        result = firstNumber / secondNumber;
        return result;
    }

    divide()
}

else if (operators === "*") {
    function multiply() {
        result = firstNumber * secondNumber;
        return result;
    }

    multiply()
}
//embedding the expressions into a string. 
console.log(`${firstNumber} ${operators} ${secondNumber} = ${result}`);


