const express=require('express')
const router=express.Router()
const Users_Schema=require('../model/User_Schema')
const bodyParser=require('body-parser')

const multer=require('multer')
const path=require('path')



//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())


//for upload file
router.use(express.static('upload'))


//upload img logic
// img upload
const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./upload")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    return cb(null,`${uniqueSuffix}-${file.originalname}`)
  }
})

const upload = multer({ storage:Storage })







router.post('/createUser',async(req,res)=>{
//  console.log(req.file)
   
    try{
      
        const userData=new Users_Schema({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
          
        })
      
       const create= await Users_Schema.create(userData)
     if(create){
      return   res.status(200).json({msg:'Food Item has been created',data:userData})
     }
        
    }
   
    catch(err){
    return  res.status(400).json({msg:'could not find the connection || data is wrong'})
    }
})







//Get the data
router.get('/users',async(req,res)=>{
  
 try{
  let Data=await Users_Schema.find({})
  if(Data){
   return  res.status(200).json({data:Data,msg:'Data has been collected from the backend'})

  }

    return res.status(400).json({msg:'data not found || wrong inoformation given'})
  
 }
 catch(e){
  res.status(400).json({msg:'could not process the request'})
 }

})



//Get the single Data
router.get('/user/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  let Data=await Users_Schema.findById({_id})
  if(Data){
   return  res.status(200).json({data:Data, msg:'find the single data of required item'})

  }
    return res.status(400).json({msg:'could not process the request'})
  
 }
 catch(e){
  res.status(400).json({msg:'wrong information given'})
 }

})





//Delete the data by id
router.delete('/deleteUser/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await Users_Schema.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'deleted the item'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the delete request '
  })
 }
})


//update the data by id
router.patch('/updateUser/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await Users_Schema.findByIdAndUpdate(
    {_id},{
    name:req.body.name,
    price:req.body.price,
    img:req.body.img,
    detail:req.body.detail
  })
  

   return res.status(200).json({msg:'data has been updated'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the request for the update'
  })
 }
})






module.exports=router;