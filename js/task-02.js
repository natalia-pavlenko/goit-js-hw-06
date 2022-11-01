const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  // console.log(ingredients[i]);
  const newElement = document.createElement("li");
  console.log(newElement);
  newElement.textContent = ingredients[i];
  newElement.classList.add("item");
  arr.push(newElement);
}
list.prepend(...arr);
