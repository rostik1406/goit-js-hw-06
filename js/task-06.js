// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//

const validationInputRef = document.querySelector("#validation-input");

console.log(validationInputRef.getAttribute("data-length"));

validationInputRef.addEventListener("blur", (event) => {
  validationInputRef.classList.remove("valid", "invalid");

  if (
    event.target.value.length ===
    +validationInputRef.getAttribute("data-length")
  ) {
    validationInputRef.classList.add("valid");
  } else if (
    event.target.value.length !==
    +validationInputRef.getAttribute("data-length")
  ) {
    validationInputRef.classList.add("invalid");
  }
});

// if (
//   event.target.value.length ===
//   +validationInputRef.getAttribute("data-length")
// ) {
//   validationInputRef.classList.add("valid");
//   if (validationInputRef.classList.contains("invalid")) {
//     validationInputRef.classList.remove("invalid");
//   }
// } else {
//   if (validationInputRef.classList.contains("valid")) {
//     validationInputRef.classList.remove("valid");
//   }
//   validationInputRef.classList.add("invalid");
// }
//
//
