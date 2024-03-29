const http=require("http");
const path=require("path");
const fs=require("fs");
var fileName=process.argv[2];

http.createServer(function(req,res){//请求对象，传入对象
    if (fileName==undefined){
        var str="hello";
        fs.readFile(process.argv[1],function(err,data){//process.argv[1]表示路径
        if(err){
            console.log(err);
        }
        else{
            str=data.toString();
            res.end(str);
        }
    })
}
else{
    var pathName=path.join(__dirname,fileName);
    if(fs.existsSync(pathName)){
        fs.readFile(pathName,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.eventNames(data.toString());
            }
        })
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end("文件不存在！");
    }
}
}).listen(8081);
console.log("server is listening 8081");
/**
 * fs.readfile()是一个异步方法，执行到该句不会等待文件读取完成，
 * 就直接执行后面的语句。
 * 回调函数是等到文件读取完成之后才执行
 */

