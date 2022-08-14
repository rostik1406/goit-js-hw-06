const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listContainerEl = document.querySelector("#ingredients");
console.log(listContainerEl);

const makeIngredientsEl = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = option;

    return itemEl;
  });
};

const elements = makeIngredientsEl(ingredients);
listContainerEl.append(...elements);
