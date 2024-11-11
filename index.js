const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const materiaRoutes = require("./js/routes/materiaRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/materia', materiaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started port ${PORT}`));

