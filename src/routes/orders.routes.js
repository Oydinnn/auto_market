import { Router} from 'express'
import orderController from '../controllers/orders.controllers.js'
import validationMiddleware from '../middleware/validation.middleware.js' 
const router = Router()

router
  .get("/orders/:id", orderController.searchDebt)
  .get("/orders", orderController.getAllOrders)
  .post("/orders", validationMiddleware, orderController.orderCreate)

export default router