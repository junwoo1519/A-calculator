var calculatorScreen = document.querySelector(".calculator__screen");
var padButton = document.querySelectorAll(".calculator__table tbody td button");
var result = 0;
padButton.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
        result += parseInt(item.innerHTML);
        calculatorScreen.textContent = String(result);
    });
});
