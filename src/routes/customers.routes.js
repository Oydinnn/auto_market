import { Router } from 'express'
import customerController from '../controllers/customers.controllers.js'
const router = Router()

router
  .get("/customers", customerController.getAllCustomers)
  .post("/customers", customerController.customerCreate)

  export default router