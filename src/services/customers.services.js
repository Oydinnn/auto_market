import pool from "../database/config.js";

class CustomerService{
  constructor(){}

  async getAllCustomers(){
    const customers = await pool.query('SELECT * FROM  customers')
    return customers.rows
  }

  async customerCreate(data){
    const{fullname, contact} = data
     await pool.query('INSERT INTO customers(fullname, contact) values ($1, $2)',
      [fullname, contact]
     )
     return{
      success: true,
      message: 'customer success created'
     }
  }
}

const customerService = new CustomerService()
export default customerService;