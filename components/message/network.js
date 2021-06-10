//improtamos modulos

//modulo de express
const express = require("express");
//definimos el router del componenete especifico
const router = express.Router();
//definimos el modulo que responde de las peticiones http
const response = require("../../net/responses.js");
//definimos el controlador de la aplicacion
const controller = require("./controller.js");
//definismo el modulo para recibir y manejar archivos
const multer = require("multer");
//instancia para el controlador de archivos'
const upload = multer({
    //manda archivos a caperta public y dentro de ella files
    dest: "public/files/"
});
//aca definimos las funciones de las peticiones http

//metodo get
router.get("/",function(req, res){
    const filterUser = req.query.user||null;
    controller.getMessages(filterUser)
    .then((messageList) => {
        response.succes(req, res, messageList, 201);
    })
    .catch( e =>{
    response.error(req, res, "Mensaje no encontrado", 500, e)});
});

//metodo post
router.post("/", upload.single("file"), function(req, res){
    console.log()
    //aca le  decimos a nuestro controlador que añade un mensaje con el request enviado
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage)=>{
        response.succes(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res,"informacion invalida ", 400, "error en console");
    })
});

//metodo patch
//se espra que el id del mensaje que se quiere modificar en el path
router.patch("/:id",function(req,res){
    controller.updateMessage(req.params.id, req.body.message)
    .then((updatedMessage) =>
        response.succes(req, res, updatedMessage, 200))
    .catch(e =>{
        response.error(req, res, "error Interno", 500, e)
    })    
})

//metodo delte 
//se espera el id del elemento a borrar (mensaje)
router.delete("/:id",function(req,res){
    controller.deleteMessage(req.params.id)
    .then(() =>
        response.succes(req, res, "mensaje borrado", 200))
    .catch(e =>{
        response.error(req, res, "error Interno", 500, e)
    })    
})

module.exports = router;