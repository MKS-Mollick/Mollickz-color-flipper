const colors = [
  "violet",
  "purple",
  "indigo",
  "blue",
  "green",
  "orange",
  "tomato",
  "red",
  "burlywood",
  "pink",
  "grey",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  // get random color index between 0 - 6 from colors array

  let randomColorIndex = getRandomColorIndex();
  console.log(randomColorIndex);
  document.body.style.backgroundColor = colors[randomColorIndex];

  color.textContent = colors[randomColorIndex];
});

function getRandomColorIndex() {
  return Math.floor(Math.random() * colors.length);
}
