
function task2() {
  let number = 0;
  let result = "";

  do {
    if (number === 0) {
      result += "0 – це нуль\n";
    } else if (number % 2 === 0) {
      result += number + " – парне число\n";
    } else {
      result += number + " – непарне число\n";
    }

    number++;
  } while (number <= 10);

  console.log(result);

  document.getElementById("output").textContent = result;
}
