const express = require('express')
const cors = require('cors') //cross origin resource sharing
// const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const router = require('./routers')

app.use(cors({
  origin: 'https://your-frontend-url.vercel.app', // Replace with your Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json())






//db conection
db.connect();


//middleware
app.use(bodyParser.json({limit : "50mb"}))
app.use(bodyParser.urlencoded({extended : "true" , limit : "50mb"}))




//api
app.use('/api', router)











//server listening
const PORT = process.env.PORT || 80
app.listen(PORT, () => {
    console.log(`Clone is running on ${PORT}`)
})
