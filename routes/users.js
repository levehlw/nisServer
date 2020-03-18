const express = require('express');
const router = express.Router();

const { login, register } = require('../controller/users')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 登录路由
router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if(data){
      res.json(new SuccessModel(data))
    }
    else{
      res.json(new ErrorModel('登陆失败，登录名或密码错误！'))
    }
  })
});

// 注册用户
router.post('/new', function(req, res, next){
  const userInfo = req.body
  const result = register(userInfo)
  return result.then(data => {
    if(data.affectedRows > 0){
      res.json(new SuccessModel('注册成功'))
    }
    else{
      res.json(new ErrorModel('注册失败'))
    }
  })
})
module.exports = router;
