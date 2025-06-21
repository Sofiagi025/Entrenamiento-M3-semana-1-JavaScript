/*Inicialización del programa*/
console.log("¡Bienvenido al Sistema Interactivo de Mensaje!")
/*Captura datos del usuario */
let nombre = pront("Por favor, ingresa tu nombre: ")
let edad = prompt("Por favor, ingresa tu edad: ")
/*Convertir edad a número*/
edad = parseInt(edad);

/*Codigo de Validación y Mensaje*/

if (isNaN(edad)){
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else if (edad < 18) {
    alert('hola ${nombre}, Eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!')
} else {
    alert('hola ${nombre}, Eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación!')
}


