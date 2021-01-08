
const mongoose = require("../model/db.js");


var postSchema = mongoose.Schema({
    kolId:String,
    platform:String,
    platformUid:String,
})

var PostModel = mongoose.model('Post',postSchema)


module.exports = PostModel;