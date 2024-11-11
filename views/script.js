document.addEventListener('DOMContentLoaded', () => {
    const guardar = document.getElementById("guardar");

    const registrarMateria = () => {
        const nombreMateria = document.getElementById("nombreMateria").value;
        const dia = document.getElementById("dia").value;
        const profesor = document.getElementById("profesor").value;
        const cupo = document.getElementById("cupo").value;
        const fechaInicio = document.getElementById("fechaInicio").value;

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
                    cupo,
                    fechaInicio
                })           
            }
        ).then(response => response.json())
        .then(data => {
            console.log(data.mensaje);
        })
    };

    if(guardar){
        guardar.addEventListener("click", registrarMateria);
    }
});