const express = require("express");
const app = express();
var bodyParser = require('body-parser')
// var UserModel=require("./model/user.js");
const userRouter = require("./router/userRouter")

// const routes = require('./router');



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

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());


// app.get('/index',(req,res)=>{
//     res.send("this is index")
// });

// app.post("/regis",(req,res)=>{
//     console.log(req.body);
//     res.send("app regis");
// })

//方案一导入路由
app.use('/api',userRouter); 

// //方案二导入路由
// app.use('/api',routes)

app.listen(9000,()=>{
    console.log("app start");
})