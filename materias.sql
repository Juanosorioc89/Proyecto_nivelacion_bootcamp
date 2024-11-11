CREATE TABLE Materias{
    id int not null auto_increment, 
    nombreMateria varchar(50) not null,
    dia varchar(50) not null,
    profesor varchar(50) not null,
    cupos int(3),
    fechaInicio Date,
    PRIMARY KEY(id)
} 
