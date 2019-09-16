var Dog=require("./dog");
//console.log(Dog);
var dog1=new Dog("teddy",5);
function barkFun(){
    console.log(this.name+"barked!!!");
    console.log(this.energy);
}


dog1.on("bark",barkFun);
var intervalid=setInterval(function(){
    if (dog1.energy>=0){
        this.emit("bark");
    }
    else{
        //clearInterval(intervalid);
        intervalid.unref();//不要在调用其他函数
    }
    dog1.energy=dog1.energy-1;
}, 1000);
//dog1.emit("bark");