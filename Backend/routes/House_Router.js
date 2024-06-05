const express=require('express')
const router=express.Router()
const House_Schema=require('../model/Houses_Schema')
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







router.post('/createHouses',upload.single('img'),async(req,res)=>{
//  console.log(req.file)
   
    try{
      
        const houses=new House_Schema({
            name:req.body.name,
            address:req.body.address,
            images:req.file.filename,
            rooms:req.body.rooms,
            UnavailableDate:req.body.UnavailableDate,
            detail:req.body.detail,
            rentPerDay:req.body.rentPerDay,
        })
      
       const create= await House_Schema.create(houses)
     if(create){
      return   res.status(200).json({msg:'Food Item has been created',data:houses})
     }
        
    }
   
    catch(err){
    return  res.status(400).json({msg:'could not find the connection || data is wrong'})
    }
})







//Get the data
router.get('/houses',async(req,res)=>{
  
 try{
  let Data=await House_Schema.find({})
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
router.get('/houses/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  let Data=await House_Schema.findById({_id})
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
router.delete('/deleteHouse/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await House_Schema.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'deleted the item'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the delete request '
  })
 }
})


//update the data by id
router.patch('/updateHouse/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await House_Schema.findByIdAndUpdate(
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