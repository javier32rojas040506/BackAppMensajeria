//definimos el modelo que va a usar la base de dtaos para guardar la informacion
const Model = require("./model.js");

//function añadir ususario (asincrona)
async function addUser(name){
    const User = await new Model(name);
    User.save();
}

//funcion getUser 
async function getUsers(){
    const ListUsers = [];
    listUsers = await Model.find();
    return listUsers
}

//exportamos nuestar funciones de store
module.exports = {
    add: addUser,
    getList: getUsers
}