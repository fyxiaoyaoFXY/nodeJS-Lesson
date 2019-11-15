var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next){
  /**
   * render页面的渲染
   * 读取ejs文件内容，将文件中占位符替换(<%=userName %>)
   * 替换成后端给定的数据（也就是render的第二个参数）
   * 再将文件中的代码内容响应到客户端去
   * 
   */
  res.render("list",{userName:"zhangsan",newList:[
    {"newId":1,newTitle:"为什么记不住为什么记不住"},
    {"newId":2,newTitle:"啊啊啊啊啊啊啊啊啊啊啊啊"},


  ]});
})

router.get("/index/list",function(req,res,next){
  res.end("hello express");
})

module.exports = router;
