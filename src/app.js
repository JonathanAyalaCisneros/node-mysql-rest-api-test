import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import employees from './routes/employees.js'
import router from './routes/router.js'
import {PORT} from './config.js'

const app = express()
app.use(morgan('dev'))

app.use(express.json())

app.use('/api',router)
app.use('/api',employees)

app.use((req, res, next) =>{
  res.status(404).json({
    message: 'Dont have access'
  })
})

export default app;
