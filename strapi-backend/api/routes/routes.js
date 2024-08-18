// Path

const middlewares = require("../../config/middlewares");


module.exports = {
    routes: {
        method: 'POST',
        path:'/send-email',
        handler:'email.send',
        config:{
            auth:false,
            polices:[],
            middlewares:[],
        }
    }
}