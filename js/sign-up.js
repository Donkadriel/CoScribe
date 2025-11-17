// // Wait until the whole page is fully loaded before running the script
// document.addEventListener("DOMContentLoaded", function () {

//     // ========== SELECT INPUT ELEMENTS ========== //
//     const firstName = document.querySelectorAll("input[type='text']")[0]; // First name input
//     const lastName = document.querySelectorAll("input[type='text']")[1];  // Last name input
//     const email = document.querySelector("input[type='email']");          // Email input
//     const phone = document.querySelector("input[type='tel']");            // Phone number input
//     const password = document.querySelectorAll("input[type='password']")[0]; // Password input
//     const confirmPassword = document.querySelectorAll("input[type='password']")[1]; // Confirm password input

//     // Select the Create Account button
//     const createBtn = document.querySelector(".create-btn");

//     // Select all error message elements (<small class="error-msg">)
//     const errorMessages = document.querySelectorAll(".error-msg");

//     // ========== CLEAR ERROR MESSAGE ON INPUT ========== //
//     // For every input, listen for 'input' events (when the user types)
//     [firstName, lastName, email, phone, password, confirmPassword].forEach(input => {
//         input.addEventListener("input", function () {
//             // Clear the text content of the <small> tag right below the input
//             input.nextElementSibling.textContent = "";
//         });
//     });

//     // ========== BUTTON CLICK EVENT ========== //
//     createBtn.addEventListener("click", function (event) {
//         // Prevent the form from submitting automatically
//         event.preventDefault();

//         // Clear all previous error messages
//         errorMessages.forEach(msg => msg.textContent = "");

//         // Read values from inputs and remove extra spaces at start and end
//         const first = firstName.value.trim();
//         const last = lastName.value.trim();
//         const mail = email.value.trim();
//         const phoneNum = phone.value.trim();
//         const pass = password.value.trim();
//         const confirmPass = confirmPassword.value.trim();

//         // Track if there are any validation errors
//         let hasError = false;

//         // ========== VALIDATIONS ========== //

//         // FIRST NAME validation: show error below input if empty
//         if (first === "") {
//             firstName.nextElementSibling.textContent = "First name is required."; // Display error
//             hasError = true; // Mark that there is an error
//         }

//         // LAST NAME validation
//         if (last === "") {
//             lastName.nextElementSibling.textContent = "Last name is required.";
//             hasError = true;
//         }

//         // EMAIL validation
//         if (mail === "") {
//             email.nextElementSibling.textContent = "Email is required.";
//             hasError = true;
//         }

//         // PHONE validation
//         if (phoneNum === "") {
//             phone.nextElementSibling.textContent = "Phone number is required.";
//             hasError = true;
//         }

//         // PASSWORD validation
//         if (pass.length < 8) {
//             password.nextElementSibling.textContent = "Password must be at least 8 characters long.";
//             hasError = true;
//         } else if (!/[A-Z]/.test(pass)) {
//             // /[A-Z]/ matches any uppercase letter A-Z
//             password.nextElementSibling.textContent = "Password must contain at least one uppercase letter.";
//             hasError = true;
//         } else if (!/[a-z]/.test(pass)) {
//             // /[a-z]/ matches any lowercase letter a-z
//             password.nextElementSibling.textContent = "Password must contain at least one lowercase letter.";
//             hasError = true;
//         } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
//             // Matches special characters like !, @, #, etc.
//             password.nextElementSibling.textContent = "Password must contain at least one special character.";
//             hasError = true;
//         }

//         // CONFIRM PASSWORD validation: check if passwords match
//         if (pass !== confirmPass) {
//             confirmPassword.nextElementSibling.textContent = "Passwords do not match.";
//             hasError = true;
//         }

//         // If there are no errors, show success message and redirect
//         if (!hasError) {
//             alert("Account created successfully!"); // Inform the user
//             window.location.href = "../index.html"; // Redirect to login page
//         }
//     });

// });
