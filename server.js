
require("./models/db");

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))

app.use('/',indexRouter)
app.use('/authors',authorRouter)

app.listen(process.env.PORT || 3000)
