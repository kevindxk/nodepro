var UserModel=require("./model/user.js");

UserModel.find({},(err,doc)=>{
    if (err){
        console.log(err);
        return false;
    }
    console.log(doc);
})

// var user = new UserModel({
//     name:"wangwu",
//     age:18,
// })

// user.save()