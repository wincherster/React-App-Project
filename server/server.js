const express = require('express');
const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/imooc";
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
  console.log('mongo connet success!')
})

const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 新增数据
// User.create({
//   name: 'imooc',
//   age: 18
// },function(err, doc){
//   if(!err){
//     console.log(doc);
//   }else {
//     console.log(err);
//   }
// })

// 删除数据 remove(过滤条件, fn(err,doc))
User.remove({age: 18}, function(err, doc){
  console.log(doc);
})

// 更新数据 update( 更新条件, { '$set': {...}}, fn(err,doc) )
User.update({'user':'xiaoming'}, {'$set': {age: 26}}, function(err, doc){
  console.log(doc);
})

// 查找数据 
// 1. 集合数组（多条）
User.find({}, function(err,doc){
  console.log(doc);
})
// 2. 单条数据（对象json）
User.findOne({}, function(err,doc){
  console.log(doc);
})






const app = express();

const port = 9093;

app.get('/', function(req,res){
  res.send('<h1>Hello World!!');
})

app.get('/data', function(req,res){
  let data = {name: 'imooc', type: 'IT'};

  User.find({}, function(err,doc){
    res.json(doc)
  })
  // res.json(data);
})

app.listen(port, function(){
  console.log(`server runing at http://localhost:${port}`);
})