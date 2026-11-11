
function task4() {
  let input = prompt("Введіть номер місяця від 1 до 12:");

  if (input === null) return;

  let month = Number(input);

  const months = [
    "Січень", "Лютий", "Березень",
    "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень",
    "Жовтень", "Листопад", "Грудень"
  ];

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    alert("Помилка! Введіть число від 1 до 12.");
    return;
  }

  let season;

  if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
  } else if (month >= 3 && month <= 5) {
    season = "Весна";
  } else if (month >= 6 && month <= 8) {
    season = "Літо";
  } else {
    season = "Осінь";
  }

  let result = "Місяць: " + months[month - 1] +
               "\nПора року: " + season;

  alert(result);
  console.log(result);

  document.getElementById("output").textContent = result;
}
