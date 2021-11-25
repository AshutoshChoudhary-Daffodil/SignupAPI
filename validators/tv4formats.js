const mongoose = require("mongoose");

module.exports ={
    name:data=>{
        return data.length>0 && data.length <50  && /^[a-zA-Z\s]+$/.test(data)? null : "invalid name";
    },

    username: data =>{
        return data.indexOf(' ') >= 0 ? "invalid username" : null
    },
    
    email:data=>{
        return data.length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data) ?null:"invalid email";
    },

    mobileNumber: data=> {
        return /^[0-9]{9,10}$/.test(data) ? null : "Should be a mobile number.";
    },

    pasword:data=>{
        return data.length > 6 ? null:"should be more than 6 characters"
    },
}