const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const cat = await Category(req.body);
  try {
    const newCat = await cat.save();
    res.status(200).json(newCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const cat = await Category(req.body);
  try {
    const getCat = await Category.find();
    res.status(200).json(getCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
