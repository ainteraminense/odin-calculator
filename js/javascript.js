// initialize variables
const numbers = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".result");
const equalSign = document.querySelector("#equal-sign");
// let isAdditionActive = false;
// let isSubtractionActive = false;
// let isMultiplicationActive = false;
// let isDivisionActive = false;
let operation = "";
let number1;
let number2;
let result;

// setting and removing event listeners

function addSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            !number1
        ) {
            button.addEventListener("click", selectNum1);
        }
    });
}

function addSelect2EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            number1
        ) {
            button.addEventListener("click", selectNum2);
        }
    });
}

function removeSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            number1
        ) {
            button.removeEventListener("click", selectNum1);
        }
    });
}
function removeSelect2EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            number1
        ) {
            button.removeEventListener("click", selectNum2);
        }
    });
}

function selectNum1(event) {
    displayNumber(event.target);
    number1 = Number(event.target.id);
    console.log("Num1 " + number1);
    setOperator();
}

function selectNum2(event) {
    if (number1) {
        event.target.removeEventListener("click", selectNum1);
        displayNumber(event.target);
        number2 = Number(event.target.id);
        console.log("num2: " + number2);
    }
}

function setOperator() {
    if (number1 && !operation) {
        operators.forEach((button) => {
            button.addEventListener("click", () => {
            switch (button.id) {
                case "addition":
                    removeOperatorBackground(operation);
                    operation = "isAdditionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    setOperatorBackground(operation);
                    break;
                case "subtraction":
                    removeOperatorBackground(operation);
                    operation = "isSubtractionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    setOperatorBackground(operation);
                    break;
                case "multiplication":
                    removeOperatorBackground(operation);
                    operation = "isMultiplicationActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    setOperatorBackground(operation);
                    break;
                case "division":
                    removeOperatorBackground(operation);
                    operation = "isDivisionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    setOperatorBackground(operation);
                    break;
                default: 
                console.log("Equal sign was pressed");
            }
        })
    })
}};

function setOperatorBackground(operation) {
    switch (operation) {
        case "isAdditionActive":
            document.querySelector("#addition").classList.add("operator-selected");
            break;
        case "isSubtractionActive":
            document.querySelector("#subtraction").classList.add("operator-selected");
            break;
        case "isMultiplicationActive":
            document.querySelector("#multiplication").classList.add("operator-selected");
            break;
        case "isDivisionActive":
            document.querySelector("#division").classList.add("operator-selected");
            break;
        default:
            console.log("Some undefined operation");
    }
}

// displaying

function displayNumber(num) {
    display.textContent = num.id;
}

function displayResult(result) {
    display.textContent = result.toString();
}

// operations

function add(num1, num2) {
    result = num1 + num2;
}

function subtract(num1, num2) {
    result = num1 - num2;
    console.log("result is: " + result);
}

function multiply(num1, num2) {
    result = num1 * num2;
}

function divide(num1, num2) {
    result = num1 / num2;
}

function operate(operation, num1, num2) {
    switch (operation) {
        case "isAdditionActive":
            add(num1, num2);
            displayResult(result);
            operation = null;
            number1 = result;
            console.log("Num1 is: " +  num1);
            number2 = null;
            result = null;
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isSubtractionActive":
            subtract(num1, num2);
            displayResult(result);
            operation = null;
            number1 = result;
            console.log("Num1 is: " +  num1);
            number2 = null;
            result = null;
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isMultiplicationActive":
            multiply(num1, num2);
            displayResult(result);
            operation = null;
            number1 = result;
            console.log("Num1 is: " +  num1);
            number2 = null;
            result = null;
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isDivisionActive":
            divide(num1, num2);
            displayResult(result);
            operation = null;
            number1 = result;
            console.log("Num1 is: " +  num1);
            number2 = null;
            result = null;
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        default:
            console.log("Some undefined operation");
    }
}

function removeOperatorBackground(operation) {
    switch (operation) {
        case "isAdditionActive":
            document.querySelector("#addition").classList.remove("operator-selected");
            break;
        case "isSubtractionActive":
            document.querySelector("#subtraction").classList.remove("operator-selected");
            break;
        case "isMultiplicationActive":
            document.querySelector("#multiplication").classList.remove("operator-selected");
            break;
        case "isDivisionActive":
            document.querySelector("#division").classList.remove("operator-selected");
            break;
        default:
            console.log("Some undefined operation");
    }
}

addSelect1EventListeners();
equalSign.addEventListener("click", () => {
    return operate(operation, number1, number2);
});