
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