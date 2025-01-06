const express = require("express");
const router = express.Router();
const upload= require('../config/multer')
const cloudinary=require('../config/cloudinary')

router.post('/upload',upload.single('file'),async (req,res) =>{
            //console.log(req.file);
            try{
            const uploadResponse= await cloudinary.uploader.upload(req.file.path);
            console.log(uploadResponse);
            }
            catch(e){
                console.log(e);
            }}
            )
            //res.send(req.file);
      

module.exports = router;