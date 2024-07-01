//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const Houses= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    address:{
        type:String,
        // required:true

    },
    rooms:{
        type:Number,
        // required:true

    },
    rentPerDay:{
        type:Number,
        // required:true

    },
    unavailableDate:{
        type:[Date],
        // required:true

    },
    detail:{
        type:String,
        // required:true

    },
    city:{
        type:String,
        // required:true

    },
    images:{
       type:[String]
    },
    city:{
        type:Schema.Types.objectId,
        ref:'cities'
    }
    

})








// mongoose collection name specfied//created the new collection|table
const Avilable_Houses= new mongoose.model("Houses",Houses)

//export the schema that will be import in the main.js file
module.exports=Avilable_Houses;