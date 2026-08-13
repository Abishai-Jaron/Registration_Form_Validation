/* =========================================================
   ADVANCED LEVEL — REGISTRATION FORM VALIDATION
   Complete client-side validation with regex checks
   ========================================================= */

document.getElementById("yearNow").textContent = new Date().getFullYear();

const regForm = document.getElementById("regForm");
const fullNameField = document.getElementById("fullName");
const emailField = document.getElementById("email");
const mobileField = document.getElementById("mobile");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const successMsg = document.getElementById("successMsg");

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

/* Updates one field's error text and border color */
function setStatus(field, errorId, message) {
  document.getElementById(errorId).textContent = message;
  if (message === "") {
    field.classList.remove("invalid");
    field.classList.add("valid");
  } else {
    field.classList.remove("valid");
    field.classList.add("invalid");
  }
}

function checkFullName() {
  const value = fullNameField.value.trim();
  if (value === "") {
    setStatus(fullNameField, "errFullName", "Please enter your full name.");
    return false;
  }
  if (value.length < 3) {
    setStatus(fullNameField, "errFullName", "Please enter at least 3 characters.");
    return false;
  }
  setStatus(fullNameField, "errFullName", "");
  return true;
}

function checkEmail() {
  const value = emailField.value.trim();
  if (value === "") {
    setStatus(emailField, "errEmail", "Please enter your email address.");
    return false;
  }
  if (!EMAIL_REGEX.test(value)) {
    setStatus(emailField, "errEmail", "Please enter a valid email address.");
    return false;
  }
  setStatus(emailField, "errEmail", "");
  return true;
}

function checkMobile() {
  const value = mobileField.value.trim();
  if (value === "") {
    setStatus(mobileField, "errMobile", "Please enter your mobile number.");
    return false;
  }
  if (!MOBILE_REGEX.test(value)) {
    setStatus(mobileField, "errMobile", "Please enter a valid 10-digit mobile number.");
    return false;
  }
  setStatus(mobileField, "errMobile", "");
  return true;
}

function checkPassword() {
  const value = passwordField.value;

  if (value === "") {
    setStatus(passwordField, "errPassword", "Please enter your password.");
    return false;
  }

  if (!PASSWORD_REGEX.test(value)) {
    setStatus(
      passwordField,
      "errPassword",
      "Password must be at least 8 characters and contain a letter and a number."
    );
    return false;
  }

  setStatus(passwordField, "errPassword", "");
  return true;
}

function checkConfirmPassword() {
  const value = confirmPasswordField.value;
  if (value === "") {
    setStatus(confirmPasswordField, "errConfirmPassword", "Please re-enter your password.");
    return false;
  }
  if (value !== passwordField.value) {
    setStatus(confirmPasswordField, "errConfirmPassword", "Passwords do not match.");
    return false;
  }
  setStatus(confirmPasswordField, "errConfirmPassword", "");
  return true;
}

/* Live validation as the user types */
fullNameField.addEventListener("input", checkFullName);
emailField.addEventListener("input", checkEmail);
mobileField.addEventListener("input", checkMobile);
passwordField.addEventListener("input", checkPassword);
confirmPasswordField.addEventListener("input", checkConfirmPassword);

passwordField.addEventListener("input", function () {
  if (confirmPasswordField.value !== "") {
    checkConfirmPassword();
  }
});

/* Form submission */
regForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameOk = checkFullName();
  const emailOk = checkEmail();
  const mobileOk = checkMobile();
  const passwordOk = checkPassword();
  const confirmOk = checkConfirmPassword();

  const allValid = nameOk && emailOk && mobileOk && passwordOk && confirmOk;

  if (allValid) {
    successMsg.classList.remove("hidden");
    regForm.reset();
    [fullNameField, emailField, mobileField, passwordField, confirmPasswordField]
      .forEach(function (field) {
        field.classList.remove("valid", "invalid");
      });
  } else {
    successMsg.classList.add("hidden");
  }
});
