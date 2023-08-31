$colorGuess = document.getElementById("colorGuess");
$square = document.querySelectorAll(".square");
$startBtn = document.getElementById("startBtn");
$inject = document.getElementById("inject");

colorsArray = [
  "rgb(223, 255, 0)",
  "rgb(255, 191, 0)",
  "rgb(255, 127, 80)",
  "rgb(222, 49, 99)",
  "rgb(159, 226, 191)",
  "rgb(64, 224, 208)",
  "rgb(100, 149, 237)",
  "rgb(204, 204, 255)",
];

// function randomColor() {
//   var random = Math.floor(Math.random() * colorsArray.length);
//   return colorsArray[random];
// }
function randomNumber(min, max) {
  let n = Math.floor(Math.random() * (max - min) + min);
  return n;
}

let color;
$startBtn.addEventListener("click", function () {
  let colorsUsed = [];
  for (let x = 0; x < $square.length; x++) {
    color = colorsArray[randomNumber(0, colorsArray.length)];
    while (colorsUsed.includes(color)) {
      color = colorsArray[randomNumber(0, colorsArray.length)];
    }
    colorsUsed.push(color);
    $square[x].style.backgroundColor = color;
  }
  let pickColorWin = colorsUsed[randomNumber(0, colorsUsed.length)];
  $inject.innerHTML = pickColorWin;
});

for (let i of $square) {
  i.addEventListener("click", function () {
    if ($inject.innerHTML === i.style.backgroundColor) {
      return alert("WIN!");
    }
  });
}



const input = [1, -4, 12, 0, -3, 29, -150];

input
  .filter(function (num) {
    return num > 0;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

