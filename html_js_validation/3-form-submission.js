// Variables
const form = document.getElementById('submitForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// event listener on the form
form.addEventListener('submit', handleFormSubmit);

// Form submisssion
function handleFormSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  // Check if name or email fields are empty
  if (!name || !email) {
    alert('Please fill in all required fields');
  } else {
    // If valid submit the form
    form.submit();
    alert('Form submitted successfully!');
  }
}
