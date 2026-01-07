import {Router} from 'express'
import paymentController from '../controllers/payments.controllers.js'
import validationMiddleware from '../middleware/validation.middleware.js'
const router = Router()

router
  .get("/payments", paymentController.getAllPayments)
  .post("/payments", validationMiddleware, paymentController.paymentCreate)

export default router
