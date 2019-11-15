const http=require("http");

http.createServer(function(req,res){
    res.end("hello world");
}).listen(8081);
console.log("sevrer is listening 8081");