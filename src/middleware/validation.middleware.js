import validation from '../utils/validation.utils.js'

export default async (req, res, next)=>{
  if(req.method == "POST" && req.url == "/cars"){
    const {error} = await validation.carSchema.validate(req.body)
  if(error){
    return res.status(400).json({
      status: 400,
      message: error.details[0].message
    })
  }
  next()
  }

  else if(req.method == "POST" && req.url == "/orders"){
    const {error} = await validation.orderSchema.validate(req.body)
  if(error){
    return res.status(400).json({
      status: 400,
      message: error.details[0].message
    })
  }
  next()
  }

   else if(req.method == "POST" && req.url == "/payments"){
    const {error} = await validation.paymentSchema.validate(req.body)
  if(error){
    return res.status(400).json({
      status: 400,
      message: error.details[0].message
    })
  }
  next()
  }
}