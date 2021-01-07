var express = require('express');

var app = express();

app.use((req,res,next)=>{
    console.log('time:',Date.now());
    next()
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });


app.get('/',(req,res)=>{
    res.send("this is app middlewares");
});

app.listen(9898,()=>{
    console.log("开启app");
});