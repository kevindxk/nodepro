const express = require('express');

const router=express.Router();


router.get("/user",(req,res)=>{
    res.send("this is user");
    // return "this is user";
})

router.post("/register",(req,res)=>{
    console.log(req.body);
    return "this is user register";
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    return "this is user login";
})

module.exports = router;