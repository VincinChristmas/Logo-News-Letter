document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('.newsletter__form-input');
    const invalidEmail = document.querySelector('.newsletter__form-input--error');
    const modal = document.querySelector('.email-modal');
    const userEmailSpan = document.querySelector('.user-email');
    const closeBtn = document.querySelector('.email-modal__close');
    const container = document.querySelector('.container');


//Function to check if email is valid
function emailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

//Handle form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent form from submitting; stop page refresh

    if (emailValid(emailInput.value)) {
        //Hide error
        invalidEmail.style.display = 'none';
        //Show modal
    } else {
        //Show error
        invalidEmail.style.display = 'block';
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
        emailInput.style.backgroundColor = '#ffe8e6';
    }
})

});