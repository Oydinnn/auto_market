import pool from "../database/config.js";
class OrderService{
  constructor(){}

  async getAllOrders(){
    const orders = await pool.query('SELECT * FROM orders')
    return orders.rows
  }

  async orderCreate(data){
    const { car_id, customer_id, start_date, end_date, amount, month_count} = data

    const car = await pool.query('SELECT price FROM cars WHERE id=$1',[car_id])
    const percent = car.rows[0].price * 0.2
    if(percent > amount){
      return {
        status: 400,
        message:"Boshlang'ich tulov yetarli emas"
      }
    }
    
    const newOrder = await pool.query('insert into orders(car_id, customer_id, start_date, end_date, month_count) values ($1, $2, $3, $4, $5) returning *',
      [car_id, customer_id, start_date, end_date, month_count]
      )

    const orderId = newOrder.rows[0].id
    await pool.query('insert into payments(order_id, amount) values($1, $2)', [orderId, amount])

    return{
      success: true,
      message: 'Order and Payments succesfully created'
    }
  }
}
const orderService = new OrderService()
export default orderService;