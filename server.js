//importando modulos

//modulo de express (framework)
const express = require("express");
//modulo de mensajes por body
const bodyParser = require("body-parser");
//router puente entre la capa compoenentes
const router = require("./net/routes");
//creamos una appicacion de express que es util
var app = express();
//para mensajes en el body como json
app.use(bodyParser.json());
//para mensajes otro tipo
app.use(bodyParser.urlencoded({extended:true}));
//activamos la funcion de router y direccionamos todo al componente escogido
//en la app general
router(app);
//con esto podemos traernos estaticos de la carpeta public
app.use("/app", express.static("public"));
//iniciamos el servidor
app.listen(3000);
console.log("la aplicacion esta escuchando en http://localhost:3000");