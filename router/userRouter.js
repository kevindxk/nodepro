const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const userModel = require('../model/user');

router.get("/user", (req, res) => {
    res.send("this is userindex");
    // return "this is user";
})

//用户的注册接口
router.post("/register", (req, res) => {
    // console.log(req.body);
    // console.log(req.body.name);
    // res.send("this is register");
    // return "this is user register";
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var phone = req.body.phone;

    // var userModel = new userModel({});
    // userModel.init();
    //生成口令的散列值，crypto 模块功能是加密并生成各种散列
    var md5 = crypto.createHash('md5');
    // digest([encoding])方法计算数据的hash摘要值，encoding是可选参数，不传则返回buff
    var en_data = md5.update(password).digest('hex');
    console.log(en_data);

    //把数据存入数据库
    userModel.insertMany({
        username: `${username}`,
        password: `${en_data}`,
        phone: `${phone}`
    }, (err, doc) => {
        if (err) {
            console.log("写入失败");
        } else {
            console.log(doc);
            console.log("写入成功");
        }
    })
    // var userInfo = new userModel({
    //     username:`${username}`,
    //     password:`${en_data}`,
    //     phone:`${phone}`
    // });

    // userModel.insert(username,en_data,phone,(err,result)=>{
    //     if (err){
    //         console.log(err);
    //     }else{
    //         console.log(result);
    //         res.send("数据写入数据库成功");
    //     }
    // })
    // userInfo.save((err)=>{
    //     if(err){
    //         console.log("写入失败");
    //     }else{
    //         console.log("写入成功");
    //     }
    // })
    res.send("注册成功");
})

//用户的登录
router.post('/login', (req, res) => {
    // console.log(req.body);
    // res.send("this is user login");
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password)
    //对密码进行加密
    var md5 = crypto.createHash('md5');
    var en_date = md5.update(password).digest('hex');
    console.log(en_date)
    // var findUser= new userModel();
    // findUser.init();
    //查询该用户
    userModel.find({ "username": `${username}` }, (err, result) => {
        console.log(result[0]);
        if (err) {
            console.log('登录失败');
            // res.send("登录失败");
            // return "登录失败";

        } else if (result[0].password == en_date) {
            console.log('登录成功');
            // res.send('登录成功');
            // return "登录成功";
        } else {
            console.log('"账号或密码错误"');
            // res.send("账号或密码错误");
            // return "账号或密码错误";
        }
    });
    res.json({ foo: true })
    // res.send("登录成功111111");
})

module.exports = router;