const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

dotenv.config();
app.use(express.json());  // for parsing the body data to json.



// Making the mongoDB connection

mongoose.connect(process.env.DB_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('The Application Is Connected With The Database.'))
  .catch((err)=>console.log("The Database Is Not Connected With application Beacuse Of :",err));



app.use("/api/auth",authRoute);


app.get('/',(req,res)=>{
    res.send("The Api is running")
})

// Declaring the port where the application will run.
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Application is running at port ${PORT}`);
})