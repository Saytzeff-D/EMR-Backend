const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.DEV_PORT
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '20mb'}))
const cors = require('cors')
const pool = require('./connection/pool')
app.use(cors({origin: '*'}))

pool.getConnection((err, conn)=>{
    if (!err) {
        console.log('MySQL Server connected successfully')
    } else {
        console.log('Pool Connection error', err)
    }
})
app.get('/', (req, res)=> res.send('Achilles EMR Server is running'))
app.listen(port, ()=>{
    console.log(`Achilles EMR is now listening on PORT ${port}`)
})