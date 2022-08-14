const inputNameEl = document.querySelector("#name-input");
const titleNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", inpurChange);

function inpurChange(event) {
  console.log(event.currentTarget.value);
  if (inputNameEl.value === "") {
    titleNameEl.textContent = "Anonymous";
  } else titleNameEl.textContent = event.currentTarget.value;
}
