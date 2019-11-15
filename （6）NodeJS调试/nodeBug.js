import { Http2SecureServer } from "http2";

//va a=1;//SyntaxError:语法错误，可能是某个关键字拼错了
console.log(g);//ReferenceError:引用错误,没有声明，在某个位置上使用了未定义的变量
Http2SecureServer.createServer(function(req,res){
    req.write("hello");
}).listen(8081);