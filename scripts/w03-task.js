/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let sumID = document.querySelector("#sum");
    sumID.value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
};
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    let differenceID = document.querySelector("#difference");
    differenceID.value = subtract(subtractNumber1, subtractNumber2);
};   
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    let productID = document.querySelector("#product");
    productID.value = multiply(multiplyNumber1, multiplyNumber2);
};


document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);



/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    let quotientID = document.querySelector("#quotient");
    quotientID.value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function () {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let isMember = document.querySelector("#member").checked;
    let discount = isMember ? 0.15 : 0;
    let total = subtotal - subtotal * discount;
    document.querySelector("#total").textContent = `$${total.toFixed(2)}`;
});


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
const multiplied = numbersA.map((number) => number * 2);
document.querySelector("#multiplied").textContent = multiplied;
/* Output Sum of Multiplied by 2 Array */
const sumMult = multiplied.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumMult;
