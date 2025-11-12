// DOM object to ensure everything is loaded
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");

    // Add event listeners for input validation or other logic if needed
    emailInput.addEventListener("input", function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "";
        }
    });

    passwordInput.addEventListener("input", function() {
        if (passwordInput.value.length < 6) {
            passwordInput.style.borderColor = "red";
        } else {
            passwordInput.style.borderColor = "";
        }
    });

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            alert('Email and password fields must be filled out to log in.');
            return;
        }

        // proceed with login and redirect on success
        window.location.href = './html/home.html';
    });

});