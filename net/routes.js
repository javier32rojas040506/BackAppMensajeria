//importando modulos
//modulo de express
const express = require("express");
//del componente de mensajes nos tramemos el network que soluciona los http
const message  = require("../components/message/network.js");
//del componente de User nos tramemos el network que soluciona los http
const user  = require("../components/User/network.js");
//del componenete de chat nos traemos el network que soluciona los http
const chat = require("../components/chat/network.js")
//direccionamos el modulo messages
const routes = function (server){
    server.use("/message", message);
    server.use("/user", user);
    server.use("/chat", chat);
}
//hacemos exportable nuestro direccionamiento
module.exports = routes;