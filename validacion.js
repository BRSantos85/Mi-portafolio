//Haz tú validación en javascript acá
document.querySelector(".formcontato__form").addEventListener("submit", function(event) {
    event.preventDefault(); // Detenemos el envío del formulario

    // Obtenemos los valores de los campos
    var nombre = this.elements["nombre"].value.trim();
    var email = this.elements["email"].value.trim();
    var asunto = this.elements["asunto"].value.trim();
    var mensaje = this.elements["mensaje"].value.trim();

    // Validamos que los campos no estén vacíos
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validamos el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    // Formulario válido, así que lo enviamos
    this.submit();
});