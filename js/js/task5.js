
function task5() {
  let input = prompt("Введіть температуру у градусах Цельсія:");

  if (input === null) return;

  if (input.trim() === "") {
    alert("Введіть температуру!");
    return;
  }

  let Tc = Number(input);

  if (!Number.isFinite(Tc)) {
    alert("Помилка! Введіть число.");
    return;
  }

  let Tf = (9 / 5) * Tc + 32;

  let result = Tc + " °C = " + Tf.toFixed(2) + " °F";

  alert(result);
  console.log(result);

  document.getElementById("output").textContent = result;
}
