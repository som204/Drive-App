const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        minlength: [5,"Min Length of Username is 5"]
    },
    email:{
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        minlength: [10,"Min Length of Email is 10"]
    },
    password:{
        type: String,
        trim: true,
        required: true,
        minlength: [8,"Min Length of Password is 8"]
    }
});

const user = mongoose.model('user',userSchema);

module.exports = user;