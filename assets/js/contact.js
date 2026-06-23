document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact_form");
    const errorMessage = document.getElementById("error_message");
    const errorName = document.getElementById("error_name");
    const errorEmail = document.getElementById("error_email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        errorEmail.textContent = "";
        errorMessage.textContent = "";
        errorName.textContent = "";

        let name = document.getElementById("name_box").value.trim();
        let email = document.getElementById("email_box").value.trim();
        let message = document.getElementById("message_box").value.trim();
        let nameRegex = /^[A-Za-z\s]{2,50}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let messageRegex = /^.{10,500}$/;

        let isValid = true;

        if (name === '') {
            errorName.textContent = 'Name is required';
            isValid = false;
        }
        else if (!nameRegex.test(name)) {
            errorName.textContent = 'Valid name is required';
            isValid = false;
        }

        if (email === '') {
            errorEmail.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorEmail.textContent = 'Valid email is required';
            isValid = false;
        }

        if (message === '') {
            errorMessage.textContent = 'Message cannot be empty';
            isValid = false;
        }
        else if (!messageRegex.test(message)) {
            errorMessage.textContent = 'Enter a valid message';
            isValid = false;
        }

        if (isValid && !emailRegex.test(email)) {
            alert('Form submitted successfully!');
        }
    });
});