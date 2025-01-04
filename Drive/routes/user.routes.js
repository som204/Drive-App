const express = require("express");
const router = express.Router();
const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

router.post("/register", async (req, res) => {
  //console.log(req.body);
  const {email,username,password}=req.body;
  const hashPassword= await bcrypt.hash(password,10);
  const newUser= await userModel.create({
    email,
    username,
    password:hashPassword
  })

  res.json(newUser);
});



router.post('/login',async (req,res)=>{


    const {username,password}=req.body;
    const user= await userModel.findOne({
        username:username
    })
    
    if(!user){
        res.status(400).json({
            message: "Username or Password is Invalid"
        })
    }


    const isMatch= await bcrypt.compare(password,user.password);
    
    if(!isMatch){
        res.status(400).json({
            message: "Username or Password is Invalid"
        })
    }

    res.send("Successfully Login");   
});



module.exports = router;
