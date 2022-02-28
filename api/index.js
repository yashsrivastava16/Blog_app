const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();


mongoose.connect(process.env.DB_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('connected'))
  .catch((err)=>console.log(err));




app.get('/',(req,res)=>{
    res.send("The Api is running")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Application is running at port ${PORT}`);
})