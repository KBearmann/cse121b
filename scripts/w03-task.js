/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers () {
    let addNumber1= Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let sumID = document.querySelector("#sum").value = add(addNumber1, addNumber2);

}

const buttonElement = document.querySelector("#addNumbers");
buttonElement.addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    let sumID1 = document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);

}    
const buttonElement1 = document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)
/* Arrow Function - Multiply Numbers */
let mutiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    let sumID3 = document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);    
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;
let divideNumbers = () => {
    let divideNumber1 = number(document.querySelector("#dividend").value);
    let divideNumber2 = number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click, divideNumbers");
/* Decision Structure */
let currentDate = new Date ();
let currentYear = currentDate.getFullYear();
document.querySelector("#Year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
const numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector("#array").textContent = numbersA;
/* Output Odds Only Array */
const odds = numbersA.filter((numbers) => numbers % 2 !==0);
document.querySelector("#odds").textContent = odds;
/* Output Evens Only Array */
const evens = numbersA.filter((numbers) => numbers % 2 !== 1);
document.querySelector("#evens").textContent = evens;
/* Output Sum of Org. Array */
const sumA = numbersA.reduce((sum, numbers) => sum + numbers);
document.querySelector("#sumOfArray").textContent = sumA;
/* Output Multiplied by 2 Array */
const mult = numbersA.map((numbers) => numbers *2);
document.querySelector("#multiplied").textContent = mult;
/* Output Sum of Multiplied by 2 Array */
const sumMult = mult.reduce((sum, numbers) => sum + numbers, 0);
document.querySelector("#sumOfMultiplicatied").textContent = sumMult;