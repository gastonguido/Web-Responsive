
//lazy load
const sections = document.querySelectorAll("[data-src]");
for (const section of sections) {
  const response = await fetch(section.dataset.src);
  const mainContent = await response.text();
  section.outerHTML = mainContent;
}


//validaciones
inputEmail.addEventListener("blur", function () {
  let email = document.getElementById("inputEmail").value;
  let emailPattern = /@gmail\.?/i;
  if (emailPattern.test(email)) {
    emailWarning.style.display = "block";
  } else {
    emailWarning.style.display = "none";
  }
});

inputPhone.addEventListener("blur", function () {
  let phone = document.getElementById("inputPhone").value;
  let phonePattern = /^[679]\d{8}(\s.*)?$/;
  if (!phonePattern.test(phone) && phone) {
    phoneWarning.style.display = "block";
  } else {
    phoneWarning.style.display = "none";
  }
});


//Añadir un submit al formulario para evitar el envío si hay errores
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  let emailError = emailWarning.style.display === "block";
  let phoneError = phoneWarning.style.display === "block";

  if (emailError || phoneError) {
    event.preventDefault(); // Prevenir el envío del formulario si hay errores
    alert("Please fill all the fields correctly❗");
  }
});

