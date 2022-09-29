const express = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path');

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})



const cityRouter = require('./routes/cities')

app.use("/cities", cityRouter)

app.use(express.static(__dirname + '/public'))

app.listen(3000)