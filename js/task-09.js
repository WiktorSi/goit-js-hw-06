function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bgColor = document.querySelector("body");
const inputButton = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

inputButton.addEventListener("click", (event)=>{
const randomColor = getRandomHexColor();
  bgColor.style.backgroundColor = randomColor;
  outputColor.innerText = randomColor;
})
