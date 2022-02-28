const router = require("express").Router();
const User = require("../models/User");

router.post("/register",async(req,res)=>{
    try {
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,

        })
        const user = await newUser.save();
        res.send(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router