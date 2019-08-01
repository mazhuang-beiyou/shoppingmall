var express = require('express');
var router = express.Router();
let User = require('../models/user');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  let userInfo = {
    userName: req.body.username,
    userPwd: req.body.password
  }
  User.findOne(userInfo, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.cookie('userId', doc.userId, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      res.cookie('username', doc.userName, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      res.json({
        status: '0',
        msg: 'success',
        result: {
          addressList: doc.addressList,
          cartList: doc.cartList,
          orderList: doc.orderList,
          userId: "100000077",
          userName: "admin"
        }
      })
    }
  })
})
//登出
router.get("/logout", (req, res, next) => {
  res.clearCookie('username')
  res.clearCookie('userId')
  res.json({
    status: '0',
    msg: 'success'
  })
})

// 检验登录
router.get("/checkLogin", (req, res, next) => {
  if (req.cookies.username) {
    res.json({
      status: '0',
      result: req.cookies.username
    })
  } else {
    res.json({
      status: '1',
      result: '',
    })
  }
})
module.exports = router;
