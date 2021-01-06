// const mongoose = require("mongoose");

// mongoose.connect('mongodb://192.168.41.128:27017/userInfo')



// //定义一个schema

// var userSchema = mongoose.Schema({
//     name:String,
//     age:Number,
//     status:Number
// })


// var User = mongoose.model('User',userSchema,'user');

// //查找数据
// User.find({},(err,doc)=>{
//     if (err){
//         console.log(err);

//     }else{
//         console.log(doc)
//     }
// })


//增加数据
//实例化
// var u = new User({
//     name:"zhangsan",
//     age:18,
//     status:1
// })
//  u.save((err)=>{
//     if (err){
//         console.log(err);
//         return false;
//     }else{
            // console.log("成功")
//         return true;
//     }
//  })



//修改数据

// User.updateOne({
//     "name":"zhangsan"
// },{"name":"lizi"},(err,doc)=>{
//     if(err){
//         console.log('修改失败');
//     }else{
//         console.log(doc);
//         console.log('修改成功');
//     }
// })

// User.deleteOne({"_id":"5ff16cff2e4379042bc30be9"},(err,doc)=>{
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log(doc);
//         console.log('删除成功');
//     }
// })
