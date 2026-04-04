// initialize variables
const numbers = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".result");
const equalSign = document.querySelector("#equal-sign");
// let isAdditionActive = false;
// let isSubtractionActive = false;
// let isMultiplicationActive = false;
// let isDivisionActive = false;
let operationString = "";
let countSetOperator = 0;
let num1String = "";
let num2String = "";
let result;

// setting and removing event listeners

function addSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            !num1String
        ) {
            button.addEventListener("click", selectNum1);
        }
    });
}

function addSelect2EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            num1String
        ) {
            button.addEventListener("click", selectNum2);
        }
    });
}

function removeSelect1EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            num1String
        ) {
            button.removeEventListener("click", selectNum1);
        }
    });
}
function removeSelect2EventListeners() {
    numbers.forEach((button) => {
        if(!button.classList.contains("operator") &&
            button.id !== "blank" &&
            num1String
        ) {
            button.removeEventListener("click", selectNum2);
        }
    });
}

function selectNum1(event) {
    if (num1String.length == 15) {
        num1String = "999999999999999";
    } else {
    num1String += event.target.id;
    }
    displayNumber(num1String);
    console.log("num1 " + num1String);
    if (countSetOperator === 0) {
        setOperator();
        countSetOperator++;
    }
}

function selectNum2(event) {
    if (num1String) {
        if (num2String.length == 15) {
            num2String = "999999999999999";
        } else {
        num2String += event.target.id;
        }
        displayNumber(num2String);
        console.log("num2: " + num2String);
    }
}

function setOperator() {
    if (num1String && !operationString) {
        operators.forEach((button) => {
            button.addEventListener("click", () => {
            switch (button.id) {
                case "addition":
                    removeOperatorBackground(operationString);
                    operationString = "isAdditionActive";
                    console.log("The operation is: " + operationString);
                    setOperatorBackground(operationString);
                    break;
                case "subtraction":
                    removeOperatorBackground(operationString);
                    operationString = "isSubtractionActive";
                    console.log("The operation is: " + operationString);
                    setOperatorBackground(operationString);
                    break;
                case "multiplication":
                    removeOperatorBackground(operationString);
                    operationString = "isMultiplicationActive";
                    console.log("The operation is: " + operationString);
                    setOperatorBackground(operationString);
                    break;
                case "division":
                    removeOperatorBackground(operationString);
                    operationString = "isDivisionActive";
                    console.log("The operation is: " + operationString);
                    setOperatorBackground(operationString);
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
    removeSelect1EventListeners();
    addSelect2EventListeners();
}

// displaying

function displayNumber(num) {
    display.textContent = num;
}

function displayResult(result) {
    display.textContent = result.toString();
}

// operations

function add(num1, num2) {
    result = num1 + num2;
    if (result > 999999999999999) {
        result = 999999999999999;
    }
}

function subtract(num1, num2) {
    result = num1 - num2;
    if (result > 999999999999999) {
        result = 999999999999999;
    }
}

function multiply(num1, num2) {
    result = num1 * num2;
    if (result > 999999999999999) {
        result = 999999999999999;
    }
}

function divide(num1, num2) {
    result = num1 / num2;
    if (result > 999999999999999) {
        result = 999999999999999;
    }
}

function operate(operation, num1, num2) {
    num1 = +num1String;
    num2 = +num2String;
    switch (operation) {
        case "isAdditionActive":
            add(num1, num2);
            displayResult(result);
            operationString = "";
            num1String = result;
            console.log("Num1 is: " +  num1);
            num2String = "";
            result = "";
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isSubtractionActive":
            subtract(num1, num2);
            displayResult(result);
            operationString = "";
            num1String = result;
            console.log("Num1 is: " +  num1);
            num2String = "";
            result = "";
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isMultiplicationActive":
            multiply(num1, num2);
            displayResult(result);
            operationString = "";
            num1String = result;
            console.log("Num1 is: " +  num1);
            num2String = "";
            result = "";
            removeSelect2EventListeners();
            operators.forEach(button => button.classList.remove("operator-selected"));
            break;
        case "isDivisionActive":
            divide(num1, num2);
            displayResult(result);
            operationString = "";
            num1String = result;
            console.log("Num1 is: " +  num1);
            num2String = "";
            result = "";
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
    return operate(operationString, num1String, num2String);
});