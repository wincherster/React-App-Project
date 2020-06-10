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

Router.get('/list', (req,res) => {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

module.exports = Router;

