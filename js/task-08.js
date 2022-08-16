function getRefs() {
  return {
    form: document.querySelector(".login-form"),
  };
}

const refs = getRefs();
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onFormInput);

const contacts = [];
const contact = {};

function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.target.name);

  contacts.push(contact);
  console.log(contacts);
  event.target.reset();
}

function onFormInput(event) {
  console.dir(event.target.name);
  console.dir(event.target.value);

  contact[event.target.name] = event.target.value;
  console.log(contact);
}
