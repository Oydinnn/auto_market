import pool from '../database/config.js'
class PaymentService{
  constructor(){}

  async getAllPayments(){
      const payments = await pool.query("SELECT * FROM payments")
      return payments.rows
  }

  async paymentCreate(data){
    const {order_id, amount} = data

    const existOrder = await pool.query('select * from orders where id = $1',[order_id])
    if(!existOrder.rows.length){
      return{
        status: 404,
        message: 'Order not found'
      }
    }

    await pool.query('insert into payments(order_id, amount) values ($1,$2)', 
      [order_id, amount]
    )
    return{
      success: true,
      message: 'payment succes created'
    }
  }
}
const paymentService = new PaymentService()
export default paymentService;