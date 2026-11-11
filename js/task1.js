
function task1() {
  let number = 2;
  let primes = [];

  while (number <= 100) {
    let divisor = 2;
    let isPrime = true;

    while (divisor < number) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
      divisor++;
    }

    if (isPrime) {
      primes.push(number);
    }

    number++;
  }

  console.log("Прості числа:", primes);

  document.getElementById("output").textContent =
    "Прості числа від 0 до 100:\n" + primes.join(", ");
}
