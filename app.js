const error = document.querySelector('.input-block');
const email = document.querySelector('.input');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.errorMsg');
const errorIcon = document.querySelector('.error-icon');

// Error message disappears as soon as input is typed.
error.addEventListener('input', () => {
    email.style.border = '1px solid hsl(0, 36%, 70%)';
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
});

// Validate Email
function ValidateEmail(mail) {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email.value
        )
    ) {
        alert('Thanks for submitting!');
        return true;
    }
    email.style.border = '1px solid hsl(0, 93%, 68%)';
    errorMsg.style.display = 'block';
    errorIcon.style.display = 'block';
}

// Form submission
btn.addEventListener('click', (e) => {
    e.preventDefault();
    ValidateEmail();
});
