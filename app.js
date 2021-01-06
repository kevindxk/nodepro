const express = require("express");
const app = express();

// var UserModel=require("./model/user.js");
const userRouter = require("./router/userRouter")



// UserModel.find({},(err,doc)=>{
//     if (err){
//         console.log(err);
//         return false;
//     }
//     console.log(doc);
// })

// var user = new UserModel({
//     name:"wangwu",
//     age:18,
// })

// user.save()

app.get('/index',(req,res)=>{
    res.send("this is index")
});


app.use('/api',userRouter);

app.listen(9000,()=>{
    console.log("app start");
})