//traemos a moongose que es el intermediario entre el toda la aplicacion y la base de datos
//mongodb+srv://admin:Mafe1906@cluster0.mehpp.mongodb.net/test
const mongoose = require("mongoose");
//nos trameso la clase schema para usarla relacionando entidades
const Schema  = mongoose.Schema;
//definimos el esquema de como se va a a=guardar la informacion en la base de datos
const mySchema = mongoose.Schema({
    chat:{
        type: Schema.ObjectId,
        ref:"Chat",
    },
    user:{
        type:Schema.ObjectId,
        ref:"User"
    },
    message:{
        type: String,
        required: true,
    },
    date:Date,
    file:String
});
//creamos el modelo que manejara la base de datos
//key --> value
const model = mongoose.model("Message", mySchema);
module.exports = model;

