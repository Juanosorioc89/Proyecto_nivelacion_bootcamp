const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "curriculo"
});

const registrarMateria = (nombreMateria, dia, profesor, cupos, fechaInicio, callback) => 
    connection.query(
        `INSERT INTO materias (nombreMateria, dia, profesor, cupos, fechaInicio) 
        VALUES ('${nombreMateria}', '${dia}','${profesor}', '${cupos}', '${fechaInicio}')`,
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

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});