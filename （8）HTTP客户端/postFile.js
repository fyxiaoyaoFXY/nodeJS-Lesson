const http=require("http");
const url=require("url");
const fs=require("fs");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.pathname=="/"){
        //var fileContent=fs.readFileSync("postfile.html");
        res.writeHead(200,{"Conten-Type":"text.html"});
        res.end(fileContent);
    }
    else if(urlObj.pathname=="/upload"){
        var strData="";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData+=chunk;
        })
        req.on("end",function(){
            var dataArr=strData.split("\r\n");
            console.log(strData);
            console.log(dataArr);
            var fileData=dataArr.slice(4,dataArr.length-2);
            fileData=fileData.join("\r\n");
            console.log(fileData);
            var buf=Buffer.from(fileData,"binary");//转换成文件形式必须是buffer方法
            fs.writeFileSync("file.jpg",buf,{"encoding":"binary"});//写到哪个文件写的数据是什么，指明一个文件的名字即可
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(fileData);
            res.end("提交成功！");
        })
    }
}).listen(8081);
console.log("server is listening 8081");