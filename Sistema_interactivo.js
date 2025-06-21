// Muestra un mensaje en consola al cargar el sistema
console.log("¡Bienvenido al Sistema Interactivo de Edad!");

// Función que se ejecuta al hacer clic en el botón
function validarEdad() {
  // Obtener valores desde los inputs del DOM
  const nombre = document.getElementById("nombre").value.trim();
  const edadInput = document.getElementById("edad").value.trim();
  const mensaje = document.getElementById("mensaje");

  // Validar que el campo edad sea un número
  const edad = parseInt(edadInput);

  // Validación básica
  if (!nombre) {
    mensaje.textContent = "Por favor, ingresa tu nombre.";
    mensaje.style.color = "red";
    return;
  }

  if (isNaN(edad)) {
    mensaje.textContent = "Por favor, ingresa una edad válida.";
    mensaje.style.color = "red";
    return;
  }

  // Mostrar mensaje según la edad
  if (edad < 18) {
    mensaje.textContent = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    mensaje.style.color = "orange";
  } else {
    mensaje.textContent = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    mensaje.style.color = "green";
  }
}
