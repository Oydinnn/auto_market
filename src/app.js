import express from 'express'
import { config } from 'dotenv'
import pool from './database/config.js'
import carRouter from './routes/cars.routes.js'
config()

const app = express()
app.use(express.json())
app.use(carRouter)

app.listen(process.env.PORT, () => console.log('server is running on port: ', process.env.PORT))