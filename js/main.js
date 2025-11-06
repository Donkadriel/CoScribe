// Create a DOM object to ensure everything is loaded
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");

    // Add event listeners for input validation or other logic if needed
    emailInput.addEventListener("input", function() {
        // Example: Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "";
        }
    });

    passwordInput.addEventListener("input", function() {
        // Example: Password length validation
        if (passwordInput.value.length < 6) {
            passwordInput.style.borderColor = "red";
        } else {
            passwordInput.style.borderColor = "";
        }
    });

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault(); // keep default prevention here and only proceed when valid

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {                 // use || not &&
            alert('Email and password fields must be filled out to log in.');
            return;
        }

        // proceed with login (send to server, or redirect on success)
        window.location.href = './html/home.html';
    });

});