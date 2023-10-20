// 스크린 영역
let calculatorScreen = document.querySelector(".calculator__screen");
let calculatorSubScreen = document.querySelector(".calculator__sub-screen");
// 스크린 영역 안 버튼
let padButton = document.querySelectorAll(".calculator__table tbody td button");
// 총합
let total = document.querySelector("#total");

let allClearButton = document.querySelector("#AllClear");
let A = 0;

let B = 0
// 초기화
let result = '';
// 버튼 반복 돌리면서 클리이벤트 걸어주기
padButton.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.id === allClearButton.id) {
      result = '';
      // 초기화 후 리렌더
      location.reload();
    } else {
      result += item.innerHTML;
      calculatorScreen.textContent = String(result);
    }
  })

});
let AddButton = document.querySelector("#Add");

// 더하기 버튼
AddButton.addEventListener("click", () => {
  A = parseInt(result);
  calculatorSubScreen.textContent = String(A);
  calculatorScreen.textContent = "";
});

// 결과 버튼
total.addEventListener("click", () => {
  if ()
})

