var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js
router.get("/:empresa?/:lote?/:medicao?", function (req, res) {
    dashboardController.buscar(req, res);
})

router.post("/", function (req, res) {
    dashboardController.criar(req, res);
    /*
    parametros via body
    metodo post
     */
});

module.exports = router;