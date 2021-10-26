const express = require('express');
const router = require('./routes');

class App {
    constructor(){
        this.express = express();
        this.Middlware();
        this.Routes();
    }

    Middlware(){
        this.express.use(express.json());
    }

    Routes(){
        this.express.use('/', router);
    }
}

module.exports =  new App().express;