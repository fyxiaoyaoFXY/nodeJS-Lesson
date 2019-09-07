function loop(){
    console.log('i will loop forever!');
}

var l=setInterval(function(){
    loop();
},500);

setTimeout(function(){
    console.log("Game over!");
    clearInterval(l);
},5000);
