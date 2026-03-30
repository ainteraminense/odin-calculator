// initialize variables
const numbers = document.querySelectorAll("button");
const display = document.querySelector(".result");

numbers.forEach((button) => {
    if(!button.classList.contains("operator") && button.id !== "blank") {
        button.addEventListener("click", () => displayNumber(button));
    }
});

function displayNumber(num) {
    display.textContent = num.id;
}

function add(num1, num2) {

}