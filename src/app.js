import express from 'express'
import { config } from 'dotenv'
import indexRouter from './routes/index.routes.js'
config()

const app = express()
app.use(express.json())
app.use(indexRouter.carRouter)
app.use(indexRouter.customerRouter)
app.use(indexRouter.orderRouter)
app.use(indexRouter.paymentRouter)




app.listen(process.env.PORT, () => console.log('server is running on port: ', process.env.PORT))