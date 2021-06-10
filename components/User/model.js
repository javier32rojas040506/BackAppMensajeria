//traemos a moongose que es el intermediario entre el toda la aplicacion y la base de datos
const mongoose = require("mongoose");
//definimos el esquema de como se va a a=guardar la informacion en la base de datos
const mySchema = mongoose.Schema({
    name:String,
});
//creamos el modelo que manejara la base de datos
//key --> value
const model = mongoose.model("User", mySchema);
module.exports = model;

    