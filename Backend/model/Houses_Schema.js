//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const Houses= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    Address:{
        type:String,
        // required:true

    },
    Rooms:{
        type:Number,
        // required:true

    },
    RentPerDay:{
        type:Number,
        // required:true

    },
    UnavailableDate:{
        type:[Date],
        // required:true

    },
    detail:{
        type:String,
        // required:true

    },
    houses:{
        type:[String],
    },
    images:{
        type:[String],
        
    }

    

})








// mongoose collection name specfied//created the new collection|table
const Avilable_Houses= new mongoose.model("Houses",Houses)

//export the schema that will be import in the main.js file
module.exports=Avilable_Houses;