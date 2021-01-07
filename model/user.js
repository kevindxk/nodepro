var mongoose = require(".././model/db.js");


var userSchema =mongoose.Schema({

    username:String,
    password :String,
    phone :Number
})

var UserModel =mongoose.model("User",userSchema);

module.exports=UserModel;