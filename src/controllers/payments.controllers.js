import paymentService from '../services/payments.services.js'
class PaymentController{
  constructor(){}

  async getAllPayments(req, res) {
    const payments = await paymentService.getAllPayments()
    res.status(200).json({
      status: 200,
      data: payments
    })
  }

  async paymentCreate(req, res) {
    const data = await paymentService.paymentCreate(req.body)
    res.send(data)
    }
}

const paymentController = new PaymentController()
export default paymentController