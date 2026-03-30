// initialize variables
const numbers = document.querySelectorAll("button");

numbers.forEach((button) => {
    if(!button.classList.contains("operator") && button.id !== "blank") {
        button.addEventListener("click", () => console.log(button.id));
    }
});