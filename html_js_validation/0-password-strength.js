// Variables
const passwordInput = document.getElementById('password');
const form = document.getElementById('passwordForm');
const error = document.getElementById('error');
const button = document.querySelector('button');

// Regular expressions for criteria
const lengthRegexp = /.{8,}/;
const uppercaseRegexp = /[A-Z]/;
const lowercaseRegexp = /[a-z]/;
const digitRegexp = /\d/;
const specialCharRegexp = /[!@#$%^&*]/;

// Validate the password
function validatePassword(password) {
  if (
    lengthRegexp.test(password) &&
    uppercaseRegexp.test(password) &&
    lowercaseRegexp.test(password) &&
    digitRegexp.test(password) &&
    specialCharRegexp.test(password)
  ) {
    error.textContent = ''; // Clear error message
    form.submit(); // form submission
  } else {
    error.textContent =
      'Password must meet all criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.';
  }
}

// event listener on the button
button.addEventListener('click', function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  validatePassword(password);
});
