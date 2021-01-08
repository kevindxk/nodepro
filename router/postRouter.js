const express = require("express");
const { route } = require("./userRouter");

const router = express.Router();


router.get("post",(req,res)=>{
    console.log(req.query);

})




module.exports = router;