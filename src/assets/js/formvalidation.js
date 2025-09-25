function validateForm() {
    var form = document.contactForm;

    var name = form.name.value;
    var email = form.email.value;
    var message = form.message.value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "" || email.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message.length < 10) {
        alert("Your message must be at least 10 characters long.");
        return false;
    }

    // Simple pop-up confirmation
    alert("Form submitted successfully!\nThank you, " + name + "!");
    return true;
}
