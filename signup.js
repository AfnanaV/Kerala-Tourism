document.addEventListener('DOMContentLoaded', function () {
    function isValidEmail(email) {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        // Remove any non-digit characters from the phone number
        const cleanedPhone = phone.replace(/\D/g, '');

        // Check if the cleaned phone number has exactly 10 digits
        if (cleanedPhone.length !== 10) {
            return false;
        }

        // Check if the cleaned phone number matches one of the specified formats
        const phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        return phoneRegex.test(cleanedPhone);
    }

    function isValidPassword(password) {
        // Implement your password strength validation logic here
        // You can use regular expressions and other checks to determine password strength
        // For example, you can check for minimum length, uppercase, lowercase, and numbers.
        // Return 'strong', 'medium', or 'poor' based on the password strength.

        // For example, you can check for a minimum length of 8 characters and the presence of at least one uppercase, one lowercase, and one number.
        if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
            return 'strong';
        } else if (password.length >= 8 && (/[A-Z]/.test(password) || /[a-z]/.test(password) || /\d/.test(password))) {
            return 'medium';
        } else {
            return 'poor';
        }
    }

    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorLabel = document.getElementById('error');

    emailInput.addEventListener('input', function () {
        const email = this.value;
        if (!isValidEmail(email)) {
            errorLabel.textContent = 'Invalid email address';
            errorLabel.style.color = 'red';
        } else {
            errorLabel.textContent = '';
        }
    });

    phoneInput.addEventListener('input', function () {
        const phone = this.value;
        if (!isValidPhoneNumber(phone)) {
            errorLabel.textContent = 'Invalid phone number';
            errorLabel.style.color = 'red';
        } else {
            errorLabel.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const passwordStrength = isValidPassword(password);

        if (passwordStrength === 'strong') {
            errorLabel.textContent = 'Password is strong';
            errorLabel.style.color = 'green';
        } else if (passwordStrength === 'medium') {
            errorLabel.textContent = 'Password is medium';
            errorLabel.style.color = 'orange';
        } else {
            errorLabel.textContent = 'Password is poor';
            errorLabel.style.color = 'red';
        }
    });

    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        let isValid = true;

        if (!isValidEmail(email)) {
            errorLabel.textContent = 'Invalid email address';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        if (!isValidPhoneNumber(phone)) {
            errorLabel.textContent = 'Invalid phone number';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        if (isValidPassword(password) === 'poor') {
            errorLabel.textContent = 'Invalid password';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        
        if (password !== confirmPassword) {
            errorLabel.textContent = 'Passwords do not match';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        if (isValid) {
            errorLabel.textContent = '';
            window.location.href = 'index.html'; // Redirect to index.html
        }
    });
});
