import orderService from "../services/orders.services.js";
class OrderController{
  constructor(){}

   async searchDebt(req, res){
    const {id} = req.params
    const data = await orderService.searchDebt(id)

    res.status(200).json({
      status: 200,
      message: data.message ? data.message : "succes",
      data: data.succes ? data : null
    })
  }

  async getAllOrders(req, res){
    const orders = await orderService.getAllOrders()
    res.status(200).json({
      status: 200,
      data: orders
    })
  }

  async orderCreate(req, res){
    const data = await orderService.orderCreate(req.body)
    res.send(data)
  }
}

const orderController = new OrderController()
export default orderController;