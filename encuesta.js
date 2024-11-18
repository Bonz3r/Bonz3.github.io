// script.js
document.getElementById('encuesta-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recolectar los datos del formulario
    let formData = new FormData(event.target);

    let respuestas = {};
    formData.forEach((value, key) => {
        if (respuestas[key]) {
            // Si la respuesta ya está registrada, se agrega a un array
            if (Array.isArray(respuestas[key])) {
                respuestas[key].push(value);
            } else {
                respuestas[key] = [respuestas[key], value];
            }
        } else {
            respuestas[key] = value;
        }
    });

    console.log('Respuestas:', respuestas);

    // Aquí puedes agregar código para enviar los datos a un servidor
    alert('¡Gracias por completar la encuesta!');

    // Reseteamos el formulario después de enviarlo
    event.target.reset();
});
