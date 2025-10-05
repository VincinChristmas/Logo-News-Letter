document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-input');
    const form = document.querySelector('newsletter__form');
    
    // Original placeholder
    const defaultPlaceholder = "name@email.com";

    // Error placeholder for invalid input
    const errorPlaceholder = "Please enter a valid email (e.g., name@example.com)";

    // Function to check validity and update placeholder
    function checkEmailValidity() {
        // Check if input is invalid (empty or not a valid email)
        if (!emailInput.validity.valid) {
            emailInput.placeholder = errorPlaceholder
            //Add a red border to highlight the error
            emailInput.classList.add('newsletter__form-input--error');
        }
        else {
            // Revert to default placeholder 
        }
    }



})