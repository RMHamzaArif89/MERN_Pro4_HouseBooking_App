//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const Users= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    Country:{
        type:Number,
        // required:true

    },
    img:{
        type:String,
        // required:true

    },
    detail:{
        type:String,
        // required:true

    },
    houses:{
        type:[String],
    }

    

})








// mongoose collection name specfied//created the new collection|table
const users= new mongoose.model("Users",Users)

//export the schema that will be import in the main.js file
module.exports=users;