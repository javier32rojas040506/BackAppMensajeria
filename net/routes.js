//importando modulos
//modulo de express
const express = require("express");
//modulo message
const message  = require("../components/message/network.js");
//direccionamos el modulo messages
const routes = function (server){
    server.use("/message", message);
}
//hacemos exportable nuestro direccionamiento
module.exports = routes;