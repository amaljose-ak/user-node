const router=require('express').Router()
const profileSchema=require('../../model/userShema')
const { userValidation } = require('../../validation/userRegisteration')


router.post('/register',async(req,res)=>{

    const {error}=userValidation(req.body)
    if (error){
        res.json({
            error:error.details[0].message
        })
    }
const saveUser =  new profileSchema({
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    password:req.body.password,


})
try {
    const savedUser= await saveUser.save()
    res.status(200).json(savedUser)
} catch (error) {
    console.log(error)
} 
})

module.exports=router