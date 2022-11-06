const validationInputRef = document.querySelector("#validation-input");

console.log(validationInputRef.getAttribute("data-length"));

validationInputRef.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    +validationInputRef.getAttribute("data-length")
  ) {
    validationInputRef.classList.add("valid");

    if (validationInputRef.classList.contains("invalid")) {
      validationInputRef.classList.remove("invalid");
    }
  } else {
    if (validationInputRef.classList.contains("valid")) {
      validationInputRef.classList.remove("valid");
    }

    validationInputRef.classList.add("invalid");
  }
});
