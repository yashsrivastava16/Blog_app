const router = require("express").Router();
const User = require("../models/User");

// Creating a seperate route for new users registrations.
router.post("/register",async(req,res)=>{
    try {
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,

        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
});


//Login process



router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({
            username : req.body.username,
        })
        if(!user){
            res.status(400).json("Wrong Credentials!!")
        }else{
            if(req.body.password == user.password){
                res.status(200).json(user)
            }else{
                res.status(400).json("Wrong Credentials!!")
            }

        }

    } catch (error) {
        res.status(500).json(error);   
    }
})


module.exports = router