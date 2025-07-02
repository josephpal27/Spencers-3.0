
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

// Functionality for the tracker boxes P element Unlock/Unlocked toggle
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.tracker-box').forEach(function(box) {
//         const tierLine = box.querySelector('.tier-line');
//         const unlockSpan = box.querySelector('p span');
//         if (tierLine && unlockSpan) {
//             if (tierLine.classList.contains('active')) {
//                 unlockSpan.textContent = 'Unlocked';
//             } else {
//                 unlockSpan.textContent = 'Unlock';
//             }
//         }
//     });
// });

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