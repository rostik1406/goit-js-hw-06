const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.dir(inputEl);
console.dir(spanEl);

inputEl.addEventListener("input", onRangeEl);

function onRangeEl(event) {
  spanEl.style.fontSize = `${+event.currentTarget.value}px`;
}
