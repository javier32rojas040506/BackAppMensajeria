//definimos el modelo que va a usar la base de dtaos para guardar la informacion
const Model = require("./model.js");


//funciones para añadir mensajes
function addMessage(message){
    //aca lo covertimos ene le modelo para guardarlo en la base de datos
    const myMessage = new Model(message);
    //ya que es un modelo apto lo guardamos "myMessage"  es un Modelo que mooongose 
    //permite que se guarde (le da la cualidad save())
    myMessage.save();
}
//funcion para obtener el mensaje
function getMessages(filterUser){
    //si el el filtro no es null del decimos el objeto Json 
    //que tenemos que encontrar
    return new Promise((resolve, reject) =>{
        let filter = {};
        if(filterUser!==null){
            filter = {
                user: filterUser
            }
        }
        //le pedimos los datos 
        //hay que popularlos para recibir le objeto user
        Model.find(filter)
        .populate("user")
        .exec((error, populated) =>{
            if(error){
                return reject(error);
            }
            return resolve(populated);
        })
    })
}

async function updateMessage(id, message){
    //encontramos el mensaje especifco por el id en la base de datos
    //tenemos que especificar el objeto en JSON
    //note que para hacer referencia al id se pone _id pues asi esta en la base de datos
    const foundMessage =  await Model.findOne({
        _id: id
    });
    //encontrada la data (mensaje) hcaemos el cambio del atributo en especifco
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

async function deleteMessage(id){
    //le decimos a monngose por medio del model que borrar
    res = await Model.deleteOne({
        _id: id
    });   
    return res;
}

//exportamos nuestras funciones
module.exports = {
    add: addMessage,
    getList:getMessages,
    update: updateMessage,
    delete: deleteMessage
}
