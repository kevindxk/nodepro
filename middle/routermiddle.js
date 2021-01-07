var express = require('express');
var app = express();
var router = express.Router();

router.use((req,res,next)=>{
    console.log('time:',Date.now());
    res.send("this is route middle");
    next();
})

router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

app.get('use',(req,res)=>{
    res.send("请求用户页面");
})


app.use('/',router);



app.listen(9898,()=>{
    console.log("开启app");
});