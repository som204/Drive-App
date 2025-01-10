const express = require("express");
const router = express.Router();
const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const authorization = require("../middleware/auth");


router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const existingUsername = await userModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already in use" });
    }

    
    const hashPassword = await bcrypt.hash(password, 10);

    
    const newUser = await userModel.create({
      email,
      username,
      password: hashPassword,
    });

   
    res.status(201).json({
      message: "User created successfully",
      
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});




router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Username or Password is Invalid" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Username or Password is Invalid" });
      }
  
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET
      );
  
      res.cookie('token', token);
  
      res.status(200).json({ message: "Successfully Logged In" });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


  router.get('/userData',authorization,async (req,res)=>{
  
    const userData= {
        username:req.user.username,
        email:req.user.email
    };
    
    res.json(userData);
  
  });




module.exports = router;
