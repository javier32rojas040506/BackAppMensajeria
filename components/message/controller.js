//esta modulo tiene la  logica del negocio

//traer modulo que guarda un mensaje
const store  = require("./store.js");
//funcion que añade un mensaje
function addMessage(chat, user, message, file){
    //creamos un arrow function
    return new Promise ((resolve, reject) =>{
        //si no existen usaurios o mensaje no deberian añadirse
        if(!user||!message||!chat)
        {
            console.error("[message controller] No hay usuario o mensaje");
            return reject("datos incorrectos");
        }

        let filePath = "";
        if (file){
            filePath = "http://localhost:3000/app/files" + file.filename;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file:filePath
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
}

//funcion getMessage
function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.getList(filterUser));
    });
}

//funcion updateMessage
function updateMessage(id, message){
    return new Promise(async (resolve, reject) =>{
        //si la informacion es invalida
        if(!id||!message)
        {
            console.log("[message contoller] No hay id o mensaje");
            return reject("datos incorrectos");
        }
        //sino le decimos a la capa de persistencia que lo busque en la bsade de datos
        //asi lo encuntra lo modifica y lo guarda
        res = await store.update(id , message);
        //devolvemos el mensaje actualizado
        resolve(res);
    });
}

//function delete message
function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if(!id)
        {
            return reject("id erroneo")
        }
        store.delete(id)
        .then(() => {
            resolve();
        }).catch(()=>{
            reject(e);
        });
    });
}   
//exporatmos un objeto con lo que queramos de este modulo
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};