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

// Scroll Reveal Effect using Intersection Observer API
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        // Stop observing after reveal to improve performance
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

// Apply reveal observer to all sections and cards
document.querySelectorAll("section, .card, .step").forEach((element) => {
  element.classList.add("reveal-target");
  revealObserver.observe(element);
});

// Apply staggered reveal delays to grid items
document.querySelectorAll(".grid-4 > *, .grid-3 > *, .steps > *").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${index * 0.1}s`);
});
