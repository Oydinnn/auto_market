import pool from "../database/config.js";
class OrderService{
  constructor(){}

  async searchDebt(id){
    const existOrder = await pool.query('select * from orders where id = $1',[id])
    if(!existOrder.rows.length){
      return{
        status: 404,
        message: 'Order not found'
      }
    }
    const price = await pool.query('select price from cars where id=$1',[existOrder.rows[0].car_id])
    price = price.rows[0].price

    const totalPaid = await pool.query('select sum(amount) from payments group by order_id =$1',[id])
    totalPaid = totalPaid.rows[0].sum

    let month = {
      1:1.15,
      3:1.30,
      6:1.55
    }
    const expected = month[existOrder.rows[0].month_count] * price
    const debt = expected - totalPaid

    return{
      status: 200,
      success: true,
      data:{
        ...existOrder,
        debt
      }
    }
  }

  async getAllOrders(){order
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