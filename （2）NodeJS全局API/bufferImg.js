const http=require("http");
const fs=require("fs");
const path=require("path");

 http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.jpeg");
    var imgBuffer=fs.readFileSync(imgPath);
    var base64Data=imgBuffer.toString("base64");
    var imgSrc="data:image/jpeg;base64,"+base64Data;
    var htmlStr="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text.html"});//200是状态码
    res.write(htmlStr);
    res.end();
    // console.log(base64Data);
}).listen(8081);

console.log("server is listening 8081");

