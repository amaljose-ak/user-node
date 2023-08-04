const express=require('express')
const dotenv=require('dotenv/config')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// importing routes
app=express()
const userRegister=require('./router/user/userRegister')

// db connection
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("database Connected successfully")
}).catch((err)=>{
    console.log(err)
})

// bodyparser for json
app.use(bodyParser.json())



//use routes
app.use('/user',userRegister)

// get method
// app.get ('/',(req,res)=>{
//     res.send('this is working')
// })




// live port
const port=process.env.PORT
app.listen(3000,()=>{
    console.log(`Server is running on ${port}`);
})