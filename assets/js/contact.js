document.addEventListener("DOMContentLoaded", () => {

    const submitForm = document.getElementById("submit");
    const errorMessage = document.getElementById("error_message");
    const errorName = document.getElementById("error_name");
    const errorEmail = document.getElementById("error_email");
    const nameBox = document.getElementById("name_box");
    const emailBox = document.getElementById("email_box");
    const messageBox = document.getElementById("message_box");

    submitForm.addEventListener("submit", async Event => {
        if (nameBox.value.trim() == "" || emailBox.value.trim() == "" || messageBox.value.trim() == "") {
            Event.preventDefault();
            errorMessage.style.visibility = "visible";
            errorEmail.style.visibility = "visible";
            errorName.style.visibility = "visible";
        }
        else {
            alert("Sent Message")
        }

    });
});
