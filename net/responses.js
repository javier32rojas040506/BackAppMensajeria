//aqui repondemos de manera estandar para los resultados de las peticiones http
//esto da estabilidad a todo el backend

//esto es en caso de tener una response exitosa
//los parametros son: ====>

// la pesticion (request) y la solucion (resolve),
//el mensaje del usuario esto es el mensaje del chat
//el estado de la peticion si no se evia se define 200 "ok" por defecto 
exports.succes = function (req, res, message, status){
        //este es el objeto que vamos a devolver a nuestro usuario
    	res.status(status||200).send({
            error: "",
            body: message
        });
}

//esto es en caso de tener una response con error
//los parametros son: ====>

// la pesticion (request) y la solucion (resolve),
//el mensaje del error causado
//el estado de la peticion si no se envia se define 500 "error interno" por defecto 
//detalles o el error completo este ultimo es para el desarrollo y por seguridad no se muestra o envia
exports.error = function(req, res, message, status, details){
    res.status(status||500).send({
        error: message,
        body: "",
    });
    console.error("[response error] "+ details);
}