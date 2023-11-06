document.addEventListener('DOMContentLoaded', function () {
    function isValidEmail(email) {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        if (password.length < 8) {
            return 'poor'; // Password is too short
        }

        if (!/[A-Z]/.test(password)) {
            return 'poor'; // Missing uppercase letter
        }

        if (!/[a-z]/.test(password)) {
            return 'poor'; // Missing lowercase letter
        }

        if (!/\d/.test(password)) {
            return 'poor'; // Missing number
        }

        return 'strong';
    }

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
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
        const password = passwordInput.value.trim();

        let isValid = true;

        if (!isValidEmail(email)) {
            errorLabel.textContent = 'Invalid email address';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        if (isValidPassword(password) === 'poor') {
            errorLabel.textContent = 'Invalid password';
            errorLabel.style.color = 'red';
            isValid = false;
        }

        if (isValid) {
            errorLabel.textContent = '';
            window.location.href = 'index.html'; // Redirect to index.html
        }
    });
});
