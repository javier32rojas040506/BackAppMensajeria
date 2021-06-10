//en este modulo ponemos lo referente a la conexion con la base de datos

//este es nuestro controlador de datos
//trameos la base de datos
const dataBase =  require("mongoose");
//le decimos que use promesas como buena practica
dataBase.Promise = global.Promise;
//conectado la base de datos
async function connect(url){
    await dataBase.connect(url, {
        //esta linea es para evitar problemas de compatibilidad
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName:"AppMessages"
    });
}
console.log("conectado a MongoDB");

module.exports = {
    connectDB:connect
};