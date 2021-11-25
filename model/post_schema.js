const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
    name:{
        type : String,
    },
    username:{
        type : String,
        unique : true
    },
    email:{
        type : String,
        unique : true
    },
    mobileno:{
        type : String,
        unique:true
    },
    password:{                                  
        type : String,
    }
});

module.exports = mongoose.model("SignUP",SignUpSchema);