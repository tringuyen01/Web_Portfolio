import express from "express";
import mongoose from "mongoose";

const router = express.Router();
const { Schema } = mongoose;

const FeedBackSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
const FeedBack = mongoose.model("Feedback", FeedBackSchema);
router.post("/", (req, res) => {
  const {email, desc}= req.body;
  const newUser = new FeedBack({
    email: email,
    desc: desc,
  });
  const savedUser = newUser.save();
  console.log(email);
  res.send(savedUser);
});

router.get("/api", function(req,res){
  FeedBack.find({}, function(err, foundItems){
    if(!err){
      res.json(foundItems);
    }else{
      console.log(err);
    }
  })
})

export default router;
// export default mongoose.model("Feedback", FeedBackSchema);
