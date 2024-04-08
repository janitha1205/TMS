const express= require('express')
const mongoose= require('mongoose')
require('dotenv').config()
const test = require('./routes/test')



const app= express()


//middleweare
app.use(express.json())



app.use((req,res,next)=>{
 console.log(req.path,req.method)
 next()

})

//routes
app.use('/api/test',test)
//connect to db
mongoose.connect(process.env.URI)
.then(()=>{
    app.listen(process.env.PORT,()=> {

        console.log("connect to db and listen to port "+process.env.PORT)
    })




})
.catch((error)=>{console.log(error)})

