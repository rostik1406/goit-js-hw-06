function getRefs() {
  return {
    form: document.querySelector(".login-form"),
    email: document.querySelector('[type="email"]'),
    password: document.querySelector('[type="password"]'),
  };
}

// const email = document.querySelector('[type="email"]');
// const password = document.querySelector('[type="password"]');

const refs = getRefs();
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onFormInput);

const contacts = [];
const contact = {};

function onFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.target.name);

  if (email.value === "" || password === "") {
    return console.log("Pleasevfill in all the fields!");
  }

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
//
//
//
//
//

// const formEl = document.querySelector(".login-form");
// console.log(formEl);
// const emailEl = document.querySelector('[type="email"]');
// console.log(emailEl);
// const passwordEl = document.querySelector('[type="password"]');
// console.log(passwordEl);

// function onFormSubmit(event) {
//   console.log("click");
//   // event.preventDefault();
//   event.preventDefault();

//   const {
//     contacts: { email, password },
//   } = event.curentTarget;

//   if (email.value === "" || password === "") {
//     return console.log("Pleasevfill in all the fields!");
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);

//   event.currentTarget.reset();
// }
