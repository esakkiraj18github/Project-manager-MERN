const express = require('express')    //(EXPRESS IMPORT)

require('dotenv').config()

const mongoose = require('mongoose');   //(MONGOOSE IMPORT)

const app = express()         //(APP CREATE)

const taskRoutes = require("./routes/taskRoute")


const cors = require('cors');


app.use(express.json())

app.use((req,res,next)=>{
    console.log('path' + req.path  + 'method' + req.method);   //(MIDDLEWARE)
    next();
});

app.use(cors())

// app.get("/",(req,res) =>{
//     res.send("Hello RAJA")     //(port implementaion examples)
// })

//DB CONNECTION
mongoose.connect(process.env.DB_URL)
   .then(()=>{
    app.listen(process.env.PORT,() =>{
        console.log("DB Connected Successfully listening to"  + process.env.PORT); //(PORT CREATE)   
    })
   }).catch((error)=>console.log(error))

app.use("/api/tasks",taskRoutes);

