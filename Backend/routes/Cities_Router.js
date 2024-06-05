const express=require('express')
const router=express.Router()
const Cities_Schema=require('../model/Cities_Schema')
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







router.post('/createCities',upload.single('img'),async(req,res)=>{
//  console.log(req.file)
   
    try{
      
        const citiesData=new Cities_Schema({
            name:req.body.name,
            country:req.body.country,
            img:req.file.filename,
            detail:req.body.detail,
            // houses:req.body.houses
        })
      
       const create= await Cities_Schema.create(citiesData)
     if(create){
      return   res.status(200).json({msg:'Food Item has been created',data:citiesData})
     }
        
    }
   
    catch(err){
    return  res.status(400).json({msg:'could not find the connection || data is wrong'})
    }
})







//Get the data
router.get('/cities',async(req,res)=>{
  
 try{
  let Data=await Cities_Schema.find({})
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
router.get('/cities/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  let Data=await Cities_Schema.findById({_id})
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
router.delete('/deleteCity/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await Cities_Schema.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'deleted the item'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the delete request '
  })
 }
})


//update the data by id
router.patch('/updateCity/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await Cities_Schema.findByIdAndUpdate(
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