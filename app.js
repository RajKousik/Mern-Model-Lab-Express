require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const mongoose = require('mongoose')

const employee = require('./routes/employeeRoute')



mongoose.connect(process.env.DB_URL);

const db = mongoose.connection

db.on('error' , errormsg => console.log(errormsg))
db.once('open', () => {
    console.log('Connection Established to db')
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api/v1/employee', employee)

app.listen(PORT, () => {
    console.log(`API is working on ${PORT}`)
})