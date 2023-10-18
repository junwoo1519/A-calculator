let calculatorScreen = document.querySelector(".calculator__screen");
let padButton = document.querySelectorAll(".calculator__table tbody td button");

let result= 0;
padButton.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        if (item.id === 'Num0') {
            result = 0;
            calculatorScreen.textContent = String(result);
            // calculatorScreen.textContent = result.toString();
        } else if (item.id === 'Num1') {
            result = 1;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num2') {
            result = 2;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num3') {
            result = 3;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num4') {
            result = 4;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num5') {
            result = 5;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num6') {
            result = 6;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num7') {
            result = 7;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num8') {
            result = 8;
            calculatorScreen.textContent = String(result);
        } else if (item.id === 'Num9') {
            result = 9;
            calculatorScreen.textContent = String(result);
        }
    })
})