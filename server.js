//importando modulos

//modulo de express (framework)
const express = require("express");

//modulo de mensajes body para tarnferencia de informacion clienete servidor
const bodyParser = require("body-parser");

//modulo de la base de discriminatorSchema
const database = require("./database");

//router que permite generar endpoints para cada request del client
//(puente entre la capa compoenentes)
const router = require("./net/routes");

//incilizamos el router antes de la app entera para que la base de datos este lista antes
database.connectDB("mongodb+srv://admin:Mafe1906@cluster0.mehpp.mongodb.net/test");

//ejecutamos express y guardamos el contenido del server en app
//(importante ejecutar express despues de  haber ejecutado el enrutador)(buena practica)
const app = express();

const cors = require("cors")
app.use(cors());

//para mensajes en el body con formato json
//con nuevas actualizaciones se puede omitir el import del body parser y 
//pasarle porque ya viene instalado en express por defecto entonces las siguinetes lineas
//quedan asi "app.use(express.json());" && "app.use(bodyParser.urlencoded({extended:true}));"
app.use(bodyParser.json());
//para mensajes otro tipo
app.use(bodyParser.urlencoded({extended:true}));


//activamos la funcion de router y direccionamos todo al componente escogido
//en la app general
router(app);

//con esto podemos traernos estaticos de la carpeta public
//para buscar estaticos en el header (endpoint) de la peticion /app/<>
app.use("/app", express.static("public"));

//iniciamos el servidor
app.listen(3000);
//mesaje de conexion a server
console.log("la aplicacion esta escuchando en http://localhost:3000");


//importante
//1)lectura de cabeceras
// a nuestra request le ponemos req.headers
//3)escitura en cabeceras
// a nuestro response le ponemos res.header({objeto en JSON})
//note la diferenci en la s