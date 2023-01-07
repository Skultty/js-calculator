const operations = ["+", "-", "*", "/", "=", "Clear", "Del", "."];
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// takes in an operator and two numbers and returns the result of the operation
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
};

const currDisplay = document.querySelector(".current-operand");
const prevDisplay = document.querySelector(".previous-operand");
const buttons = document.querySelectorAll("button");

let operation = "";
let num1 = 0;
let num2 = 0;

// Event listener for button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator(button);
  });
});

// Function that handles calculator logic
const calculator = (e) => {
  let operand = e.textContent;
  if (operations.includes(operand)) {
    switch (operand) {
      case "=":
        handleEqual();
        break;
      case "Clear":
        handleClear();
        break;
      case "Del":
        handleDel();
        break;
      case ".":
        handleDecimal();
        break;
      default:
        handleOperator(operand);
        break;
    }
  } else {
    // If the operand is not an operator, add it to the current operand
    currDisplay.textContent += operand;
  }
};

const handleEqual = () => {
  // Calculate result and display it
  num2 = parseFloat(currDisplay.textContent);
  if (num2 == 0 && operation == "/") {
    currDisplay.textContent = "Why you do dis?";
  } else {
    num1 = operate(operation, num1, num2);
    currDisplay.textContent = num1;
    prevDisplay.textContent = "";
    operation = "";
  }
};

const handleClear = () => {
  // Clear display and reset variables
  currDisplay.textContent = "";
  prevDisplay.textContent = "";
  operation = "";
};

const handleDel = () => {
  // Remove last character from display
  currDisplay.textContent = currDisplay.textContent.slice(0, -1);
};

const handleDecimal = () => {
     // Add decimal point if it doesn't already exist in the current operand
     if (!currDisplay.textContent.includes(".")) {
        currDisplay.textContent += ".";
     }
}

const handleOperator = (operand) => {
    // Save the current operand and the operator to be used later
    if (currDisplay.textContent == "" && operand == "-") {
      currDisplay.textContent = currDisplay.textContent + operand;
    } else {
        num2 = parseFloat(currDisplay.textContent);
    if (operation && currDisplay.textContent != "") {
      num1 = operate(operation, num1, num2);
      currDisplay.textContent = num1;
      prevDisplay.textContent += ` ${operation} ${num2}`;
    } else {
      num1 = num2;
      prevDisplay.textContent = currDisplay.textContent;
    }
    operation = operand;
    currDisplay.textContent = "";
    }
  };
  

