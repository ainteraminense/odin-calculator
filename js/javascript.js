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
let isNum1Selected = false;
let num1;
let num2;
let result;

// setting and removing event listeners

function addSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            !isNum1Selected
        ) {
            button.addEventListener("click", selectNum1);
        }
    });
}

function addSelect2EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            isNum1Selected
        ) {
            button.addEventListener("click", selectNum2);
        }
    });
}

function removeSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            isNum1Selected
        ) {
            button.removeEventListener("click", selectNum1);
        }
    });
}

function selectNum1(event) {
    displayNumber(event.target);
    num1 = Number(event.target.id);
    console.log("Num1 " + num1);
    isNum1Selected = true;
    console.log("isNum1Selected " + isNum1Selected);
}

function selectNum2(event) {
    if (isNum1Selected) {
        event.target.removeEventListener("click", selectNum1);
        displayNumber(event.target);
        num2 = Number(event.target.id);
        console.log("num2: " + num2);
    }
}

function setOperator() {
    if (selectNum1) {
        operators.forEach((button) => {
            button.addEventListener("click", () => {
            switch (button.id) {
                case "addition":
                    operation = "isAdditionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    button.classList.add("operator-selected");
                    break;
                case "subtraction":
                    operation = "isSubtractionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    button.classList.add("operator-selected");
                    break;
                case "multiplication":
                    operation = "isMultiplicationActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    button.classList.add("operator-selected");
                    break;
                case "division":
                    operation = "isDivisionActive";
                    console.log("The operation is: " + operation);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    button.classList.add("operator-selected");
                    break;
                default: 
                console.log("Equal sign was pressed");
            }
        })
    })
}};

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
    displayResult(result);
}

function subtract(num1, num2) {
    result = num1 - num2;
    console.log("result is: " + result);
    displayResult(result);
}

function multiply(num1, num2) {
    result = num1 * num2;
    displayResult(result);
}

function divide(num1, num2) {
    result = num1 / num2;
    displayResult(result);
}



function operate(operation, num1, num2) {
    switch (operation) {
        case "isAdditionActive":
            add(num1, num2);
            break;
        case "isSubtractionActive":
            subtract(num1, num2);
            break;
        case "isMultiplicationActive":
            multiply(num1, num2);
            break;
        case "isDivisionActive":
            add(num1, num2);
            break;
        default:
            console.log("Some undefined operation");
    }
}

addSelect1EventListeners();
setOperator();
equalSign.addEventListener("click", () => {
    return operate(operation, num1, num2);
});