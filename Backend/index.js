const express=require('express')
const app=express()
const cors=require('cors')
// const session=require('express-session')
const CookieParser=require('cookie-parser')
const bodyParser = require("body-parser");
const Users=require('./routes/User_Router')
const Cities=require('./routes/Cities_Router')
const Houses=require('./routes/House_Router')



var corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))


//for upload file
app.use(express.static('upload'))


//this is middleWare use to encode the form&body request value //example req.body from form
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


//require the db connection
require('./db/conn.js')

//middleware for the router
app.use('/api',Users)
app.use('/api',Cities)
app.use('/api',Houses)

app.listen(5000,()=>{
    console.log('port is listening')
})