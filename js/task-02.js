const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let ingredientsArray = [];
for (const ingredient of ingredients){
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList = "item";
  
  ingredientsArray.push(listElement);
  
}
list.append(...ingredientsArray);
