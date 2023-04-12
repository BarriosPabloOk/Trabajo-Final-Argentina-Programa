const form = document.querySelector("#contact-form");

const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const currentInput = event.target; // Obtenemos el campo de entrada actual
    const currentIndex = Array.from(inputs).indexOf(currentInput); // Obtenemos el índice del campo actual
    if (currentInput.tagName === "TEXTAREA") {
      return; // Si es un área de texto, no cambiamos el foco
    }
    const nextIndex = (currentIndex + 1) % inputs.length; // Calculamos el índice del siguiente campo
    inputs[nextIndex].focus(); // Cambiamos el foco al siguiente campo
  }
});

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);

  var constraints = {
    name: {
      presence: true,
      exclusion: {
        within: ["nicklas"],
        message: "'%{value}' is not allowed",
      },
    },
    email: {
      presence: true,
      email: true
    },
  };

  const errors = validate(formData, constraints); // Validamos los datos con validate.js

  if (errors) {
    // Si hay errores, los mostramos en la consola
    console.log(errors);
  } else {
    // Si no hay errores, enviamos el formulario
    form.submit();
  }


});
