// Wait for the form to be submitted
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevents the page from reloading

  // Show a confirmation message after clicking Send
  document.getElementById("confirmation").innerText = "Thank you! Your message has been received.";

  // Clear all form fields after submission
  this.reset();
});
