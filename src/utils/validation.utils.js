import Joi from 'joi'

class Validation{
  constructor(){}

  carSchema = Joi.object({
      name:Joi.string().alphanum().required(),
      price:Joi.number().required(),
      year: Joi.number().min(2020).max(2025)
    })

  orderSchema = Joi.object({
      car_id:Joi.number().required(),
      customer_id:Joi.number().required(),
      start_date:Joi.string().required(),
      end_date:Joi.string().required(),
      month_count:Joi.number().valid(1,3,6).required(),
      amount:Joi.number().required()
    })
  
}

export default  new Validation()