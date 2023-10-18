let calculatorScreen = document.querySelector(".calculator__screen");
let padButton = document.querySelectorAll(".calculator__table tbody td button");

let result = 0;
padButton.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        result += parseInt(item.innerHTML);
        calculatorScreen.textContent = String(result);
    })
})