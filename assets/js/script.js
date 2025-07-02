
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