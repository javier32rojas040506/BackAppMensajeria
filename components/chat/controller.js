//esta modulo tiene la  logica del negocio

//traer modulo que guarda un mensaje
const store  = require("./store.js");

//funcion para añadir un mensaje
function addChat(users){
    return new Promise((resolve, reject) =>{
        if(!users||!Array.isArray(users)){
            return reject("Lista de usuarios incorrectos");
        }
        const chat ={
            users: users
        }
        store.add(chat);
        return resolve(chat);
    });
}

function getChats(userId){
    return new Promise((resolve, reject) =>{
        return resolve(store.getList(userId));
    });
}

//exportamos funciones del controlador
module.exports = {
    add: addChat,
    getList: getChats
}