var mongoose = require(".././model/db.js");


var userSchema =mongoose.Schema({
    name:String,
    age:Number,
    stats:{
         type:Number,
         default:1    
        }
})

var UserModel =mongoose.model("User",userSchema);

module.exports=UserModel;