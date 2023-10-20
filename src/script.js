// 스크린 영역
var calculatorScreen = document.querySelector(".calculator__screen");
var calculatorSubScreen = document.querySelector(".calculator__sub-screen");
// 스크린 영역 안 버튼
var padButton = document.querySelectorAll(".calculator__table tbody td button");
// 총합
var total = document.querySelector("#total");
var allClearButton = document.querySelector("#AllClear");
var A = 0;
var B = 0;
// 초기화
var result = '';
// 버튼 반복 돌리면서 클리이벤트 걸어주기
padButton.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        if (item.id === allClearButton.id) {
            result = '';
            // 초기화 후 리렌더
            location.reload();
        }
        else {
            result += item.innerHTML;
            calculatorScreen.textContent = String(result);
        }
    });
});
var AddButton = document.querySelector("#Add");
// 더하기 버튼
AddButton.addEventListener("click", function () {
    A = parseInt(result);
    calculatorSubScreen.textContent = String(A);
    calculatorScreen.textContent = "";
});
// 결과 버튼
total.addEventListener("click", function () {
    if ()
        ;
});
