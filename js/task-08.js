const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (!email.value || !password.value) {
    return alert("Please note that all fields must be completed!");
  }
  const access = {
    email: email.value,
    password: password.value,
  };
  console.log(access);
  event.currentTarget.reset();
}
