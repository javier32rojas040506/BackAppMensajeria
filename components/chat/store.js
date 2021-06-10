//definimos el modelo que va a usar la base de dtaos para guardar la informacion
const Model = require("./model.js");

//function añadir chat (asincrona)
async function addchat(chat){
    const myChat = new Model(chat);
    await myChat.save();
    return true;
}

//funcion getChat
function getChat(userId){
    return new Promise((resolve, reject) =>{
        let filter= {};
        if (userId){
            filter = {
                users:userId
            };
        }
        Model.find(filter)
        .populate("users")
        .exec((error,populated)=>{
            if(error){
                return reject(error);
            }
            console.log(populated);
            resolve(populated);
        })
    })
}

//exportamos nuestar funciones de store
module.exports = {
    add: addchat,
    getList: getChat
}