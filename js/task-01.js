const listWithId = document.querySelector("#categories");
const navLiEL = listWithId.querySelectorAll("li.item");
console.log(`Number of categories:  ${navLiEL.length}`);
for (let i = 0; i < navLiEL.length; i += 1) {
  console.log(`Category:  ${navLiEL[i].querySelector("h2").textContent}`);
  console.log(`Elements: ${navLiEL[i].querySelectorAll("ul li").length}`);
}
