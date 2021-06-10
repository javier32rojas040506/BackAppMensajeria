//improtamos modulos

//modulo de express
const express = require("express");
//definimos el router del componenete especifico
const router = express.Router();
//definimos el modulo que responde de las peticiones http
const response = require("../../net/responses.js");
//definimos el controlador de la aplicacion
const controller = require("./controller.js");
//aca definimos las funciones de las peticiones http


//metodo getUsers
router.get("/", function(req, res){
    controller.getList()
    .then((ListOfUsers)=>{
        response.succes(req, res, ListOfUsers, 201);
    })
    .catch(e =>{
        response.error(req, res, "Error interno", 500, e);
    });
});

//metodo post
router.post("/", function(req, res){
    controller.add(req.body.name)
    .then((user)=>{

        response.succes(req, res, user, 201 )
    })
    .catch(e => {
        console.log(e);
        response.error(req, res, "error Interno", 500, e)
    });
});

module.exports = router;