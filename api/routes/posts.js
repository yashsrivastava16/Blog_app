const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");


//Make the route for CREATING the post

router.post("/",async(req,res)=>{
    const newPost =  new Post(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error)
    }
})


//Make the route for UPDATING THE POST

router.put("/:id",async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(req.body.username === post.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body,
                },{new:true});
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            res.status(401).json("You can update only your posts")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


// MAKE THE ROUTE FOR DELETING THE POST

router.delete("/:id",async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(req.body.username === post.username){
            try {
                await post.delete()
                res.status(200).json("Your post is successfully deleted");
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            res.status(401).json("You can delete only your posts")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})




//MAKE THE ROUTE FOR FETCHING THE SINGLE POST

router.get("/:id",async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json("Sorry we are unable to fetch this post from the database.")
    }
});



//MAKE THE ROUTE FOR FETCHING ALL POSTS

router.get("/",async(req,res)=>{
    try {
        const userName = req.query.user;
        const categ = req.query.cat;
        try {
            let posts;
            if(userName){
                posts = await Post.find({username:userName});
            }else if(categ){
                posts = await Post.find({
                    categories : {
                        $in:[categ],
                    }
                });
            }else{
                posts = await Post.find()
            }
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json("Sorry we are unable to fetch this post from the database.")
        }
    } catch (error) {
        res.status(500).json("Sorry we are unable to fetch this post from the database.")
    }
});




module.exports = router
