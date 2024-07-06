import express from "express"
import routes from "./routes"
import { resolve } from 'path'
import cors from 'cors'
import './database'//I just want this class to be instantiated and run this file

class App{
    constructor(){
        this.app = express()
        this.app.use(cors()) //must be above routes and middleware
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use('/product-file',express.static(resolve(__dirname,'..','uploads')))
    }

    routes(){
        this.app.use(routes)
    }
}

export default new App().app