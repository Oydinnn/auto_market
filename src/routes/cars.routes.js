import {Router} from 'express'
import carController from '../controllers/cars.controllers.js'
// import validation from '../utils'
const router = Router()

router
  .get("/cars", carController.getAllCars)
  .post("/cars", carController.carCreate)

export default router
