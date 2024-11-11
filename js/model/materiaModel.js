const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Curriculo"
});

const registrarMateria = (nombreMateria, dia, profesor, cupo, fechaInicio, callback) => 
    connection.query(
        `INSERT INTO materias (nombreMateria, dia, profesor, cupo, fechaInicio) 
        VALUES ('${nombreMateria}', '${dia}','${profesor}', '${cupo}', '${fechaInicio}')`,
        (err, results) =>{
            if(err){
                callback(err, null);
            } else{
                callback(null, results)
            }
        }   
    );


module.exports = {
    registrarMateria
} 