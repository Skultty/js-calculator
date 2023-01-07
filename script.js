let operation = "";
const operations = ["+", "-", "*", "/", "=", "Clear", "Del", "."];
let num1 = 0;
let num2 = 0;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


// takes in an operator and two numbers
// returns the result of the operation
const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
        return add(a, b);
        case "-":
        return subtract(a, b);
        case "*":
        return multiply(a, b);
        case "/":
        return divide(a, b);
    }
}

// Path: script.js
const currDisplay = document.querySelector(".current-operand");
const prevDisplay = document.querySelector(".previous-operand");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator(button);
    });
});

const calculator = (e) => {

    let operand = e.textContent;

    if (operand === "=") {
        num2 = parseFloat(currDisplay.textContent);
        console.log(num1 + " num1");
        console.log(num2 + " num2");
        console.log(operation + " operation");
        currDisplay.textContent = operate(operation, num1, num2);
    }


    if (operand === "Clear") {
        currDisplay.textContent = "";
        prevDisplay.textContent = "";
        operation = "";
    }

    if (operand === "Del") {
        currDisplay.textContent = currDisplay.textContent.slice(0, -1);
    }

    if (operand === ".") {
        if (!currDisplay.textContent.includes(".")) {
            currDisplay.textContent += e.textContent;
        }
    }

    if (!operations.includes(operand)) {
        currDisplay.textContent += e.textContent;
    } else if (operand != "=" && operand != "Clear" && operand != "Del" && operand != ".") {
        num1 = parseFloat(currDisplay.textContent);
        prevDisplay.textContent = currDisplay.textContent;
        currDisplay.textContent = "";
        operation = operand;
        console.log(num1);
    }
        
}

