const cp=require("child_process");

var childProcecss=cp.spawn("node", ["childProcess1.js"]);
var result="";
childProcecss.stdout.on("data",function(chunk){
    console.log(chunk);
    result+=chunk;
})

childProcecss.stdout.on("close",function(){
    console.log(result);
})
