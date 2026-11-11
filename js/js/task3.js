
function task3() {
  let numb = 10000;
  let result = numb;
  let counter = 0;

  while (result >= 50) {
    result = result / 2;
    counter++;
  }

  console.log("result =", result);
  console.log("counter =", counter);

  document.getElementById("output").textContent =
    "Результат: " + result +
    "\nКількість ітерацій: " + counter;
}
