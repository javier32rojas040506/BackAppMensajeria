//esta modulo tiene la  logica del negocio

//traer modulo que guarda un mensaje
const store  = require("./store.js");

//funcion para añadir un mensaje
function addUser(name){
    return new Promise((resolve, reject) =>{
        if(!name){
            return reject("Datos incorrectos");
        }
        const user ={
            name: name
        }
        store.add(user);
        resolve(user);
    });
}

function getUsers(){
    return new Promise((resolve, reject) =>{
        return resolve(store.getList());
    });
}

//exportamos funciones del controlador
module.exports = {
    add: addUser,
    getList: getUsers
}