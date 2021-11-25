
exports.userValidation=(req,res,next)=>{
    req.check('name',"name cannot be empty").notEmpty();
    req.check('username',"username cannot be empty").notEmpty();
    req.check('email',"username cannot be empty").notEmpty();
    req.check('password',"username cannot be empty").notEmpty();

    const errors=req.validationErrors();
    if(errors){
        const firstError=errors.map((error)=>error.msg)[0];
        return res.status(400).json({error : firstError});
    }
    next();
};