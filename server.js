const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
const dotenv = require("dotenv");




dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'))

//mongodb connection
connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

//set view engine
app.set("view engine","ejs")

//load asssets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers

app.use('/user',require('./server/routes/userRouter'))
app.use('/book',require('./server/routes/bookRouter'))
app.use('/',require('./server/routes/auth'))

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
