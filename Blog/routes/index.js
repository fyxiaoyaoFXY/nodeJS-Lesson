
var express = require('express');
var router = express.Router();
 var data1=require('../data.json');

var json = {
  username: "zhangsan",
  password: "123456"};
/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('login', { title: 'Express' });
});

router.post('/list',function (req, res, next) {
    if('zhangsan' == req.body.username && '123456' == req.body.password){
      
        console.log('success!');
        res.render('list',{data1});
    }else{
        console.log('failed!');
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('用户名或密码错误');
    }
})

module.exports = router;
