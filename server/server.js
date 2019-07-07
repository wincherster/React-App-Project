const express = require('express');

const app = express();

const port = 9093;

app.get('/', function(req,res){
  res.send('<h1>Hello World!!');
})

app.get('/data', function(req,res){
  let data = {name: 'imooc', type: 'IT'};
  res.json(data);
})

app.listen(port, function(){
  console.log(`server runing at http://localhost:${port}`);
})