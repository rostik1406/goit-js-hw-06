const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

[...categoriesEl.children].forEach((element) => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});
