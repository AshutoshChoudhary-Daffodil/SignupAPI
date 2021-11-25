const express = require('express');
const Users= require('../model/post_schema.js');
const router = express.Router();
const tv4= require('tv4');
const validator = require('../validators/new_user.js');
router.get('/',(req,res)=>{
    const users = Users.find();
    users.then((users)=>{
        res.status(200).json({users:users});
      })
      .catch(err=>console.log(err))
});

tv4.addFormat(require('../validators/tv4formats.js'));

const validateUser={
    type:"object",
    properties:{
        name:{
            type:"string",
            format:"name"
        },
        username:{
            type:"string",
            format:"username",
        },
        email:{
            type:"string",
            format:"email",
        },
        mobileno:{
            type:"string",
            format:"mobileNumber",
        },
        password:{                                  
            type:"string",
        }
        
    },
    required:["name","username","email","password"]
}

const validate = (body)=>{
    const valid = tv4.validate(body,validateUser);
    if(valid){
        return true;
    }
    return false;
    
}


router.post("/signup",(req,res)=>{
    const result = validate(req.body);
    if (result){
        res.send("validated")
    }
    else{res.send(tv4.error.params.message);}
    
    
    
    
});

module.exports=router;