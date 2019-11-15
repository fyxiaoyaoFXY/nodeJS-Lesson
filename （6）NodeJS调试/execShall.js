const cp=require("child_process");

/**
 * 执行shell指令，启动一个子进程
 * 
 * notepad：启动记事本
 * mstsc
 * exec（命令，回调函数）除了启动node的进程，
 * 还可以执行shall指令启动进程
 * 
 */

cp.exec("notepad",function(err,stdout,stderr){//启动记事本
    console.log(err);
    console.log(stdout);
    console.log(stderr);
})