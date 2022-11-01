const sizeInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
sizeInput.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
