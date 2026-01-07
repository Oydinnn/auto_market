import {Router} from 'express'
import carController from '../controllers/cars.controllers.js'
// import validation from '../utils/validation.utils.js'
import validationMiddleware from '../middleware/validation.middleware.js'
const router = Router()

router
  .get("/cars", carController.getAllCars)
  .post("/cars",validationMiddleware, carController.carCreate)

export default router
