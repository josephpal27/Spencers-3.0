
// Functionality for the phone input box border on focus
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('#phone-input-box input');
    const phoneSpan = document.querySelector('#phone-input-box span');
    if(phoneInput && phoneSpan) {
        phoneInput.addEventListener('focus', function() {
            phoneSpan.classList.add('focused');
        });
        phoneInput.addEventListener('blur', function() {
            phoneSpan.classList.remove('focused');
        });
    }
});

// --------------------------------------------------------------------------------------------

// Functionality for the passbook page table to highlight the ₹0 values in red
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.passbook-table table td').forEach(function(td) {
        if (td.innerText.trim() === '₹0') {
            td.classList.add('red');
        }
    });
});

// --------------------------------------------------------------------------------------------

// Functionality for Signup page Form Submission
const form = document.querySelector(".signup-container form");
const dobInput = document.getElementById("dop");
const emailInput = document.getElementById("email");
const ageError = document.getElementById("age-error");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", function (e) {
  let hasError = false;

  // Age validation (must be 18+)
  const dob = new Date(dobInput.value);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  const is18Plus =
    age > 18 ||
    (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));

  if (!is18Plus) {
    ageError.classList.add("show");
    hasError = true;
  } else {
    ageError.classList.remove("show");
  }

  // Email validation (only if input is not empty)
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email !== "" && !emailRegex.test(email)) {
    emailError.classList.add("show");
    hasError = true;
  } else {
    emailError.classList.remove("show");
  }

  // If any error found, prevent form submission
  if (hasError) {
    e.preventDefault();
  }
});

// --------------------------------------------------------------------------------------------