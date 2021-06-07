//vamos a definir el paquete que es es el framework
const express = require("express");
//le pedimos el router para conectarnos a internet al framework
const router = express.Router();
//creamos una varibable  donde va estar alojado nuetro proceso global
var app = express();

////una manera de crear el servidor es especificarle la ruta de esta manera
////hay que tener parametros de request que es la peticion y resolve que es como termina la peticion
// app.use("/", function(req, res){
//     res.send("hola")
// });

//le decimos a la app entera que use el router creado
app.use(router);

//luego hablamos con el servidor especificando la ruta
//para este caso solo va aa funcionar con peticiones  get
router.get("/",function(req, res){
    res.send("Hola desde get")
})
//podemos cambiar el tipo de peticion
//tambien podemos cambiar la dirreccion
router.post("/message",function(req, res){
    res.send("Hola desde post con direccion /message");
})
app.listen(3000);
console.log("la aplicacion esta escuchando en http://localhost:3000");