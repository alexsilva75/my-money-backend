const port = process.env.PORT ? process.env.PORT : 3003
const express = require('express')
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const cacheControl = require('express-cache-controller')

const allowCors = require('./cors')

const cors = require('cors')

const app = express()

app.options('*',cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(cacheControl({noCache: true}))

app.unsubscribe(queryParser()) 



app.listen(port, () =>{
    console.log(`Server listening at ${port}`)
})

module.exports = app