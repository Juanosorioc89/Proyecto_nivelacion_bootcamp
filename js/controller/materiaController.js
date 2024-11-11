const materiaModel = require("../model/materiaModel");

const registrarMateria = (req, res) => {
    const materia = req.body;
    materiaModel.registrarMateria(materia.nombreMateria, materia.dia, materia.profesor, 
        materia.cupos, materia.fechaInicio,
        (error, resultados) => {
            if(error){
                return res.status(500).json({mensaje: "Error al insertar materia"});
            }
            return res.status(201).json({mensaje: "Materia se registró correctamente"});
        }
    );
}

module.exports = {
    registrarMateria
}