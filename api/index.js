const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const catRoute = require('./routes/categories');
const multer =  require("multer");




dotenv.config();
app.use(express.json());  // for parsing the body data to json.



// Making the mongoDB connection

mongoose.connect(process.env.DB_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('The Application Is Connected With The Database.'))
  .catch((err)=>console.log("The Database Is Not Connected With application Beacuse Of :",err));

const imageStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,"test.jpg") //but when we connect our frontend we'll write here req.body.name
    },
});

const upload = multer({storage:imageStorage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("img uploaded successfully")
});

app.use("/api/auth",authRoute);

app.use("/api/users",usersRoute);

app.use("/api/posts",postRoute);

app.use("/api/categories",catRoute);


app.get('/',(req,res)=>{
    res.send("The Api is running")
})

// Declaring the port where the application will run.
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Application is running at port ${PORT}`);
})