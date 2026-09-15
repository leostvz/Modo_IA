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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = "Solicitud Modo Fiestas — " + data.get("company");
  const body =
    "Nombre: " + data.get("name") + "\n" +
    "Empresa: " + data.get("company") + "\n" +
    "Email: " + data.get("email") + "\n\n" +
    "Mensaje:\n" + data.get("message");

  status.textContent = "Solicitud preparada. Abrí el correo para enviarla.";
  const link = document.createElement("a");
  link.href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  link.textContent = "Abrir correo para enviar la solicitud";
  link.style.display = "inline-block";
  link.style.marginTop = "8px";
  link.style.color = "#d9baff";
  status.append(document.createElement("br"), link);
});
