
// // Wait for the entire HTML document to load before running the script
// document.addEventListener("DOMContentLoaded", function () {

//     // ========== SELECT INPUT ELEMENTS AND LOGIN BUTTON ========== //
//     const emailInput = document.getElementById("email");         // Email input field
//     const passwordInput = document.getElementById("password");   // Password input field
//     const loginBtn = document.getElementById("loginBtn");        // Login button

//     // Select all error message elements (<small class="error-msg">)
//     const errorMessages = document.querySelectorAll(".error-msg"); 

//     // ========== CLEAR ERROR MESSAGES ON INPUT ========== //
//     // When user types in email or password, clear the corresponding error
//     [emailInput, passwordInput].forEach(input => {
//         input.addEventListener("input", function () {
//             input.nextElementSibling.textContent = ""; // Remove the text in the <small> below input
//         });
//     });

//     // ========== LOGIN BUTTON CLICK EVENT ========== //
//     loginBtn.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form from submitting automatically

//         // Clear previous error messages
//         errorMessages.forEach(msg => msg.textContent = "");

//         // Read values from inputs and trim extra spaces
//         const email = emailInput.value.trim();       // Email value without leading/trailing spaces
//         const password = passwordInput.value.trim(); // Password value without spaces

//         let hasError = false; // Flag to track if there is any validation error

//         // -------------------------------------------
//         // 1. CHECK IF BOTH FIELDS ARE EMPTY
//         // -------------------------------------------
//         if (email === "" && password === "") {
//             emailInput.nextElementSibling.textContent = "Email is required.";         // Show error under email
//             passwordInput.nextElementSibling.textContent = "Password is required.";   // Show error under password
//             hasError = true; // Set error flag
//         }

//         // -------------------------------------------
//         // 2. CHECK IF EMAIL FIELD IS EMPTY
//         // -------------------------------------------
//         else if (email === "") {
//             emailInput.nextElementSibling.textContent = "Email is required."; // Show error under email
//             hasError = true;
//         }

//         // -------------------------------------------
//         // 3. CHECK IF PASSWORD FIELD IS EMPTY
//         // -------------------------------------------
//         else if (password === "") {
//             passwordInput.nextElementSibling.textContent = "Password is required."; // Show error under password
//             hasError = true;
//         }

//         // -------------------------------------------
//         // 4. VALIDATE PASSWORD LENGTH (must be ≥ 8)
//         // -------------------------------------------
//         else if (password.length < 8) {
//             passwordInput.nextElementSibling.textContent = "Password must be at least 8 characters long."; // Show error
//             hasError = true;
//         }

//         // -------------------------------------------
//         // 5. IF ALL VALIDATIONS PASS → REDIRECT
//         // -------------------------------------------
//         if (!hasError) {
//             alert("Login successful!"); // Optional success alert
//             window.location.href = "./html/home.html"; // Redirect to homepage
//         }
//     });
// });

