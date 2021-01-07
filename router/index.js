const express = require('express');
const router = express.Router();
const userRoutes = require('./userRouter');
// const newsRoutes = require("./newRouter");

router.use('/user', userRoutes);
// router.use("/news",newsRoutes);


module.exports = router;