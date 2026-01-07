import { Router } from 'express'
import customerController from '../controllers/customers.controllers.js'
const router = Router()

router
  .get("/customers", customerController.getAllCustomers)

  export default router