const decrBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrBtn.dataset.action);

const incrBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrBtn.dataset.action);
const spanValue = document.querySelector("#value");
let counterValue = 0;
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
console.log(counterValue);
