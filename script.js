const openButton = document.getElementById("open-form");
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

openButton.addEventListener("click", () => {
  form.classList.toggle("open");
  if (form.classList.contains("open")) {
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("name").focus();
  }
});

// Submit handler: show a sending status and allow the native form submission to FormSubmit
form.addEventListener("submit", (event) => {
  // show immediate feedback to the user
  status.textContent = "Enviando solicitud… Por favor espere.";
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.style.opacity = "0.7";
  }
  // Do NOT call event.preventDefault() so the browser will post the form to FormSubmit
});
