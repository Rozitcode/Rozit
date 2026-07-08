// DECLARING VARIABLES
const submitButton = document.getElementById("submit-button");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Regular expression used to test if the email is valid
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
function validateForm() {

  // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
  const data = {};
  const errors = [];

  // +-----------+
  // | FULL NAME |
  // +-----------+
  if (fullnameInput.value !== "") {
    data.fullname = fullnameInput.value;
  } else {
    errors.push("Full name is missing");
  }

  // +-------+
  // | EMAIL |
  // +-------+
  if (emailInput.value !== "") {
    if (emailRegex.test(emailInput.value)) {
      data.email = emailInput.value;
    } else {
      errors.push("Email is not valid");
    }
  } else {
    errors.push("Email is missing");
  }

  // +---------+
  // | MESSAGE |
  // +---------+
  if (messageInput.value !== "") {
    data.message = messageInput.value;
  } else {
    errors.push("Message is missing");
  }

  // +-----------------+
  // | FEEDBACK/ERRORS |
  // +-----------------+
  if (errors.length > 0) {
    console.log("ERRORS", errors);
  } else {
    console.log("COLLECTED DATA", data);

    // Clear text-fields
    fullnameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Register the form to the "click" event
submitButton.addEventListener("click", validateForm);
