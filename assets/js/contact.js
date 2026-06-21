document.addEventListener("DOMContentLoaded", () => {

    const submitForm = document.getElementById("submit");
    const errorMessage = document.getElementById("error_message");
    const errorName = document.getElementById("error_name");
    const errorEmail = document.getElementById("error_email");

    submitForm.addEventListener("submit", function (e) {
        e.preventDefault();

        errorEmail.textContent = "";
        errorMessage.textContent = "";
        errorName.textContent = "";

        let name = document.getElementById("name_box").value.trim();
        let email = document.getElementById("email_box").value.trim();
        let message = document.getElementById("message_box").value.trim();

        let isValid = true;

        // Validate Name
        if (name === '') {
            errorName.textContent = 'Name is required';
            isValid = false;
        }

        // Validate Email using Regex
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errorEmail.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorEmail.textContent = 'Valid email is required';
            isValid = false;
        }

        // Validate Message
        if (message === '') {
            errorMessage.textContent = 'Message cannot be empty';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // Here you can send data to server
        }

    });
});
