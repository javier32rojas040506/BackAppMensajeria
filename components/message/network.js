//improtamos modulos

//modulo de express
const express = require("express");
//definimos el router del componenete especifico
const router = express.Router();
//definimos el modulo que responde de las peticiones http
const response = require("../../net/responses.js");
//aca definimos las funciones de las peticiones http

//metodo get
router.get("/",function(req, res){
    console.log(req.headers);
    res.header({
        "customheader" :"el valor que quiera"
    });
    response.succes(req, res, "creado", 201);
});

//metodo post
router.post("/",function(req, res){
    console.log(req.query);
    if(req.query.error=="ok"){ 
        response.error(req, res,"error en la creacion", 400);
    }else {
        response.succes(req, res,"peticion creada ", 201);
    }
});

module.exports = router;