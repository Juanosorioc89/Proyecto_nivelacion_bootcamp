const express = require ("express");
const router = express.Router();
const materiaController = require("../controller/materiaController");

router.post('/registro', materiaController.registrarMateria);

module.exports = router;
