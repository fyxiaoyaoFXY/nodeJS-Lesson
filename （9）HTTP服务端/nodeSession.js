const http=require("http");
const url=require("url");
const path=require("path");
const fs=require("fs");
const querystring=require("querystring");
http.createServer(function(req,res){
    //req.headers["cookie"];
    var urlObj=url.parse(req.url,true);
    switch(urlObj.pathname){
        case"/":
        showLogin(res);
        break;
        case"/login":
        loginIn(req,res);
        break;
        case"/home":
        showHome(req,res);
        break;
    }
}).listen(8081)
function showLogin(res){
    var filePath=path.join(__dirname,"./login.html");
    var fileContent=fs.readFileSync(filePath);//异步函数数据在回调函数，同步则是直接获取
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
var sessions={};
function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        var formObj=querystring.parse(formData);
        if (formObj.username=="zhangsan"&&formObj.pwd=="123"){
            var session={
                sessionId:(new Date()).getTime()+Math.random(),
                exipire:(new Date()).getTime()+3600000,
                username:"zhangsan"
            }
            sessions[session.sessionId]=session;
            res.setHeader("Set-Cookie","sessionId="+session.sessionId);
            res.end("login sucess");
        }
        else{
            res.end('login error');
        }
    })
}
function showHome(req,res){
    var cookie=req.headers["cookie"];
    console.log(cookie);
    if(cookie==undefined){
        showLogin(res);
    }
    var cookieArr=cookie.split(";");
    var cookieObj={};
    for(var i=0;i<cookieArr.length;i++){
        var cookiePair=cookieArr[i].split("=");
        //.trim去掉空格
        cookieObj[cookiePair[0].trim()]=cookiePair[1];
    }
    console.log(cookieObj);
    //登陆了成功sessions才会有内容
    var sessionId=cookieObj.sessionId;
    for(var key in sessions){
        if(key==sessionId){
            var session=sessions[key];
            console.log(session);
            if((new Date()).getTime()<session.exipire){
                console.log("enter if");
                res.end("home page");
            }
            else{
                console.log("enter else");
                showLogin(res);
            }
            console.log(session);

        }
    }
    console.log(cookieObj);
    //var cookieArr=cookie.split(""); 
}
console.log("server is listening 8081");