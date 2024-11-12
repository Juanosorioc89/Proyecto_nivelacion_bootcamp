document.addEventListener('DOMContentLoaded', () => {
    const guardar = document.getElementById("guardar");

    const registrarMateria = () => {
        // Selecciona el formulario completo para usar checkValidity()
        const form = document.getElementById("formularioMateria");

        // Verifica si todos los campos cumplen con la validación HTML5
        if (form.checkValidity()) {
            // Obtén los valores de los campos
            const nombreMateria = document.getElementById("nombreMateria").value;
            const dia = document.getElementById("dia").value;
            const profesor = document.getElementById("profesor").value;
            const cupos = document.getElementById("cupos").value;
            const fechaInicio = document.getElementById("fechaInicio").value;

            // Envía los datos al servidor
            fetch("http://localhost:4000/materia/registro", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombreMateria,
                        dia,
                        profesor,
                        cupos,
                        fechaInicio
                    })           
                }
            ).then(response => response.json())
            .then(data => {
                console.log(data.mensaje);
                alert(data.mensaje); // Muestra un mensaje al usuario
                form.reset();
            });
        } else {
            alert("Formulario invalido");
            form.reportValidity(); // Muestra el mensaje de error nativo del navegador
        }
    };

    if (guardar) {
        guardar.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el envío por defecto
            registrarMateria();
        });
    }
});
