
function task6() {
  let input = prompt("Введіть число від 1 до 7:");

  if (input === null) return;

  let day = Number(input);
  let result;

  switch (day) {
    case 1:
      result = "Понеділок";
      break;
    case 2:
      result = "Вівторок";
      break;
    case 3:
      result = "Середа";
      break;
    case 4:
      result = "Четвер";
      break;
    case 5:
      result = "П'ятниця";
      break;
    case 6:
      result = "Субота";
      break;
    case 7:
      result = "Неділя";
      break;
    default:
      result = "Помилка! Введіть число від 1 до 7.";
  }

  if (!Number.isInteger(day)) {
    result = "Помилка! Введіть ціле число від 1 до 7.";
  }

  console.log(result);

  document.getElementById("output").textContent = result;
}
