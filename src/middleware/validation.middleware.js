import {carSchema} from '../utils/validation.utils.js'

export default async (req, res, next)=>{
  const {error} = await carSchema.validate(req.body)
  if(error){
    return res.status(400).json({
      status: 400,
      message: error.details[0].message
    })
  }
  next()
}