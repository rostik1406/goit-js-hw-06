const refs = {
  loginForm: document.querySelector(".login-form"),
  inputEmail: document.querySelector('[name="email"]'),
  inputPassword: document.querySelector('[name="password"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value || password.value.trim()) {
    const data = {
      email: email.value,
      password: password.value.trim(),
    };

    console.log(data);
    event.currentTarget.reset();
    return;
  }
  alert("Please fill in all the fields!");
}
