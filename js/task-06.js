// const inputEl = document.querySelector("#validation-input");
// inputEl, addEventListener("blur", onInputBlur);

// function onInputBlur() {
//   if (inputEl.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }

const validationInputRef = document.querySelector("#validation-input");
validationInputRef.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  const valueLength = event.currentTarget.value.length;
  const dataLength = +validationInputRef.dataset.length;

  if (valueLength === dataLength) {
    validationInputRef.setAttribute("class", "valid");
  } else {
    validationInputRef.setAttribute("class", "invalid");
  }
}
