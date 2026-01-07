import Joi from 'joi'

export const carSchema = Joi.object({
  name:Joi.string().alphanum().required(),
  price:Joi.number().required(),
  year: Joi.number().min(2020).max(2025)
})