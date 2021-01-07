const express = require('express');
const router=express.Router();


router.get("/user",(req,res)=>{
    res.send("this is userindex");
    // return "this is user";
})

//用户的注册接口
router.post("/register",(req,res)=>{
    // console.log(req.body);
    // console.log(req.body.name);
    // res.send("this is register");
    // return "this is user register";

    var username = req.body.username;
    var password = req.body.password;
    var phone = req.body.phone;
    var userModel = new userModel();
    userModel.init();
    //生成口令的散列值，crypto 模块功能是加密并生成各种散列
    var md5 = crypto.createHash('md5');
    // digest([encoding])方法计算数据的hash摘要值，encoding是可选参数，不传则返回buff
    var en_data = md5.update(password).digest('hex');
    userModel.insert(username,en_data,phone,(err,result)=>{
        if (err){
            console.log(err);
        }else{
            console.log(result);
            res.send("数据写入数据库成功");
        }
    })



})

//用户的登录
router.post('/login',(req,res)=>{
    // console.log(req.body);
    // res.send("this is user login");

    var name = req.body.username;
    var password = req.body.password;
    console.log(name,password)
    //对密码进行加密
    var md5 = crypto.createHash('md5');
    var en_date = md5.update(password).digest('hex');
    var userModel = new userModel();
    userModel.find(name,en_data,(err,result)=>{
        console.log(result);
        if(err){
            return "登录失败";
        }else if(result[0].password == en_date) {
            return "登录成功";
        }else{
            return "账号或密码错误";
        }  
    })

})

module.exports = router;