const dotenv = require('dotenv');
dotenv.config();
import express, { Application } from "express";
import cors from "cors";

import testRoutes from '../routes/test';

class Server {

    private app: Application;
    private port: String;
    
    private apiPaths = {
        test: '/api/test',
    }

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();

    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.apiPaths.test, testRoutes );
    }

    listen() {
        this.app.listen( this.port, ()=>{
            console.log(`Server on port!!: ${ this.port }`);
        })
    }

}

export default Server;