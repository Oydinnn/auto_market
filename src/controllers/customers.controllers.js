import customerService from "../services/customers.services.js"
class CustomerController{
  constructor(){}

  async getAllCustomers(req, res){
    const customers = await customerService.getAllCustomers() 
    res.status(200).json({
      status: 200,
      data: customers
    })
  }
  async customerCreate(req, res) {
      const data = await customerService.customerCreate(req.body)
      res.send(data)
      }
}

const customerController = new CustomerController()
export default customerController