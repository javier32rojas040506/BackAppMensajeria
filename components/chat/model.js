//traemos a moongose que es el intermediario entre el toda la aplicacion y la base de datos
//mongodb+srv://admin:Mafe1906@cluster0.mehpp.mongodb.net/test
const mongoose = require("mongoose");
//nos trameso la clase schema para usarla relacionando entidades
const Schema  = mongoose.Schema;
//definimos el esquema de como se va a a=guardar la informacion en la base de datos
const mySchema = mongoose.Schema({
    usersChat:[{
        type:Schema.ObjectId,
        ref:"User"
    }]
});
//creamos el modelo que manejara la base de datos
//key --> value
const model = mongoose.model("chat", mySchema);
module.exports = model;
