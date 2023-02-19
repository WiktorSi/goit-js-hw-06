let counterValue = 0;
const displayValue = document.querySelector("#value");
displayValue.textContent = counterValue;
const decrement = document.querySelector(`button [data-action = "decrement"]`);
const decrementClick = () => 
{
  return (counterValue = counterValue - 1);
};
decrement.addEventListener("click", decrementClick);
const increment = document.querySelector('button [data-action="increment"]');
const incrementClick = () => {
  return(counterValue = counterValue + 1);
};
increment.addEventListener("click", incrementClick);