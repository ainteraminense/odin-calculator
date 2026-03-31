// initialize variables
const numbers = document.querySelectorAll("button");
const display = document.querySelector(".result");
const additionBtn = document.querySelector("#addition");
let isAdditionActive = false;
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
        if (isAdditionActive) {
            num2 = Number(event.target.id);
            console.log("num2: " + num2);
            add(num1, num2);
        }
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

addSelect1EventListeners();

additionBtn.addEventListener("click", () => {
    isAdditionActive = true;
    console.log("Is Addition on: " + isAdditionActive);
    removeSelect1EventListeners();
    addSelect2EventListeners();
    }
);