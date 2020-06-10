const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/info', function(req,res){
  /**
   * 1. 判断用户有无cookie
   * 2. 返回对应的信息
   */
  return res.json({code: 1, data: {name: '测试数据 11111'}});
})

Router.get('/list', function(req,res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function(req,res) {
  console('注册请求', req.body.data)
  const {user, pwd,type} = req.body.data;

  User.findOne({user: user}, function(err, doc) {
   if(doc) {
     return res.json({code: 1, msg: '用户名重复'})
   }
   User.create({user, pwd, type}, function(e, d){
     if(e){
       return res.json({ code: 1, msg: '后端出错'})
     }
     // 写cookie
     return res.json({code: 0})
   })
  })
})

module.exports = Router;

