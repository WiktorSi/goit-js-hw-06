let counterValue = 0;
const displayValue = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
decrement.addEventListener("click", (event)=>{
  counterValue = counterValue - 1;
  displayValue.textContent = counterValue;
});
const increment = document.querySelector('button[data-action="increment"]');
increment.addEventListener("click", (event)=>{
  counterValue = counterValue + 1;
displayValue.textContent = counterValue;
});