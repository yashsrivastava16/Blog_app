const router = require("express").Router();
const User = require("../models/User");

//Updating user data
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      res.status(402).json("Invalid Email ID Please try again later.");
    } else {
      //This userID is what we will pass to the body of the application
      if (req.params.id == req.body.userID) {
        if (req.body.email == user.email) {
          try {
            const updatedUser = await User.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res
              .status(200)
              .json("Your Details Have Been Updated Successfully!");
          } catch (error) {
            res.status(500).json("Unable to update please try again later");
          }
        } else {
          res.status(404).json("Please Enter The Valid Email ID");
        }
      } else {
        res.status(404).json("Invalid details");
      }
    }
  } catch (error) {
    res.status(404).json("Bad rquest user not found!!");
  }
});

//ToDo : create a route for Deleting the user
router.delete("/:id", async (req, res) => {
  if (req.body.userID == req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Your Account Has Been Deleted Successfully");
    } catch (error) {
      res.status(404).json("User Not Found!");
    }
  } else {
    res.status(401).json("You Can Delete Only Your Account!!");
  }
});

module.exports = router;
