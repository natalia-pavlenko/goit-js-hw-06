function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const crtBtn = document.querySelector("[data-create]");
const desBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let size = 30;
crtBtn.addEventListener("click", onCreate);
desBtn.addEventListener("click", onDestroy);

function onCreate() {
  const total = input.value;
  const markup = [];
  for (let i = 1; i <= total; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
  }
  boxes.append(...markup);
}

function onDestroy() {
  // while (boxes.firstChild) {
  //   boxes.firstChild.remove();
  // }
  input.value = "";
  boxes.innerHTML = "";
  size = 30;
}
