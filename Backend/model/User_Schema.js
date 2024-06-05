//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const Users= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    email:{
        type:String,
        // required:true

    },
    password:{
        type:Number,
        // required:true

    },
    isAdmin:{
        type:Boolean,
        default:false
    }

    

})








// mongoose collection name specfied//created the new collection|table
const users= new mongoose.model("Users",Users)

//export the schema that will be import in the main.js file
module.exports=users;