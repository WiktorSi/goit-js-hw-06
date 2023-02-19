const numberCategory = document.querySelectorAll("h2");
const count = numberCategory.length;
console.log(`Numbers of category: ${count}`);


const categories = document.querySelectorAll("li.item");
for (const category of categories){
  const h2Text = category.querySelector("h2").textContent;
  const liElements = category.querySelectorAll("li").length;
  console.log(`Categories: ${h2Text}`)
  console.log(`Elements: ${liElements}`)
}