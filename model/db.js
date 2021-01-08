const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.41.128:27017/userInfo",{ useUnifiedTopology: true },(err)=>{
    if (err){
        console.log(err);
    }
    console.log("数据库连接成功");
})

// mongoose.connect("mongodb://192.168.1.27:27017/kdx",{ useUnifiedTopology: true },(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log("数据库连接成功");
// })



// module.exports = mongoose;