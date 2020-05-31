const express = require('express')
const Router = express.Router()

Router.get('/info', function(req,res){
  /**
   * 1. 判断用户有无cookie
   * 2. 返回对应的信息
   */
  return res.json({code: 1, data: {name: '测试数据 11111'}});
})

module.exports = Router;

