(function () {
    document.addEventListener("DOMContentLoaded", function () {
        // Selecciona los elementos relevantes
        const emailInput = document.getElementById("email");
        const submitLink = document.getElementById("submit-link");
        const errorMessage = document.getElementById("error-message");
    
        // Agrega un evento de clic al botón
        submitLink.addEventListener("click", function (event) {
            // Verifica si el correo electrónico contiene el símbolo "@"
            if (!emailInput.value.includes("@")) {
                               // Muestra el mensaje de error y evita que el formulario se envíe
                               errorMessage.textContent = "Valid Email Required";
                event.preventDefault();
            } else {
                errorMessage.textContent = "";
                // Redirige al usuario a success.html
                window.location.href = "./sucess.html";
            }
        });
    });
})()


