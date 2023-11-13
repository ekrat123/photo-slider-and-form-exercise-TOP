const form = document.querySelector("[data-form]");
const email = form.querySelector("[data-email]");
const counrty = form.querySelector("[data-country]");
const zip = form.querySelector("[data-zip]");
const password = form.querySelector("[data-password]");
const passwordConfirm = form.querySelector("[data-password-confirm]");
const button = form.querySelector("[data-button]");

function validateAllForm() {
  checkValidate(email, "Enter a valid email address");
  checkValidate(counrty, "Enter a valid country name");
  checkValidate(zip, "Zip code must be longer than 3 characters");
  checkValidate(password, "Password must be longer than 6 characters");
  checkValidate(passwordConfirm, "Passwords should be match", password);
}

function checkValidate(el, message, el2 = null) {
  el.addEventListener("change", () => {
    let error = el.parentElement.querySelector("small");
    if (el2 ? el.value !== el2.value : !el.checkValidity()) {
      error.textContent = "";
      error.textContent = message;
    } else {
      error.textContent = "";
    }
  });
}

window.addEventListener("load", validateAllForm);
