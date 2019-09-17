const stream=require("stream");

stream.Readable.prototype.MyReadable=function(){
    reader.pipe(process.stdout);
}
var reader=new stream.Readable();//得到一个可读的流
reader.push("abcdefghijklmnopqrstuvwxyz");
//reader.push("world");
reader.push(null);
reader.pipe(process.stdout);