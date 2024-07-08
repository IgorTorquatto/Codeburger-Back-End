import { Router } from "express"
import UserController from './app/controllers/UserController'
import SessionController from "./app/controllers/SessionController"
import ProductController from "./app/controllers/ProductController"
import CategoryController from "./app/controllers/CategoryController"
import OrderController from "./app/controllers/OrderController"
import authMiddleware from "./app/middlewares/auth"
import multer from 'multer'
import multerConfig from './config/multer'

const upload = multer(multerConfig)
const routes = new Router()

//users
routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

//sessions
routes.post('/sessions', SessionController.store)

//middleware token authentication
routes.use(authMiddleware) //the routes below will receive this middleware

//products
routes.post('/products',upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

//categories
routes.post('/categories',CategoryController.store)
routes.get('/categories', CategoryController.index)

//orders
routes.post('/orders',OrderController.store)

export default routes