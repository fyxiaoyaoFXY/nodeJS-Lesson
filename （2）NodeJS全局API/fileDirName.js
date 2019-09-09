const http = require("http");
const fs = require("fs");//关于文件模块的引入
const url = require("url");
const path = require("path");//兼容性的路径
//老师的写法：var filepath=path.join(__dirname,"路径")，path.join方法
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == "/favicon.ico") {
        res.end();
    }
    else if(urlPathName == "/") {
        var htmlPath = __dirname + "\\views\\view.html";
        var htmlContent = fs.readFileSync(htmlPath);//读取文件中的内容
        htmlContent = htmlContent.toString("utf8");//转化成字符串
        console.log(htmlPath);
        
        res.writeHead(200, {"Content-Type": "text/html"});//向客户端响应 头部信息 状态码 类型和内容
        res.write(htmlContent);//内容
        res.end();//结束
    }
    
});
server.listen(8080);
console.log("server is listening 8080");




//http.createServer().listen(8080);
//console.log("");//如果发来请求发生响应的一个是createserver中的函数
