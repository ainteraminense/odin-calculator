// initialize variables
const numbers = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".result");
const equalSign = document.querySelector("#equal-sign");
let isAdditionActive = false;
let isSubtractionActive = false;
let isMultiplicationActive = false;
let isDivisionActive = false;
let isNum1Selected = false;
let num1;
let num2;
let result;

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
        num2 = Number(event.target.id);
        console.log("num2: " + num2);
    }
}

function displayNumber(num) {
    display.textContent = num.id;
}

function displayResult(result) {
    display.textContent = result.toString();
}

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

function setOperator() {
    if (selectNum1) {
        operators.forEach((button) => {
            button.addEventListener("click", () => {
            switch (button.id) {
                case "addition":
                    isAdditionActive = true;
                    console.log("Is Addition on: " + isAdditionActive);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    break;
                case "subtraction":
                    isSubtractionActive = true;
                    console.log("Is Subtraction on: " + isSubtractionActive);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    break;
                case "multiplication":
                    isMultiplicationActive = true;
                    console.log("Is Multiplication on: " + isMultiplicationActive);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    break;
                case "division":
                    isDivisionActive = true;
                    console.log("Is Division on: " + isDivisionActive);
                    removeSelect1EventListeners();
                    addSelect2EventListeners();
                    break;
                default: 
                console.log("Equal sign was pressed");
            }
        })
    })
}};

function operate() {
    if (isAdditionActive) {
        add(num1, num2);
    } else if (isSubtractionActive) {
        subtract(num1, num2);
    } else if (isMultiplicationActive) {
        multiply(num1, num2);
    } else if (isDivisionActive) {
        divide(num1, num2);
    } else {
        console.log("Something went wrong");
    }
}

addSelect1EventListeners();
setOperator();
equalSign.addEventListener("click", operate)