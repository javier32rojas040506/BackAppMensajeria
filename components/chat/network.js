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
router.post("/", function(req, res){
    controller.add(req.body.users)
    .then((data)=>{
        response.succes(req, res, data, 201);
    })
    .catch(e =>{
        response.error(req, res, "Error interno", 500, e);
    });
});

//metodo post
router.get("/:userId", function(req, res){
    controller.getList(req.params.userId)
    .then((chatUsers)=>{
        response.succes(req, res, chatUsers, 201 )
    })
    .catch(e => {
        console.log(e);
        response.error(req, res, "error Interno", 500, e)
    });
});

module.exports = router;