


function Bomb(){
    this.message="bomb!!!";
    this.explode=function(){
        console.log(this.message);
    }

}
var bomb=new Bomb();
setTimeout(function(){
    bomb.explode();
},2000);





// var i=0;
// process.stdin.on("data",function(data){
//     i++;
//     if(i==4){
//         process.exit();

//     }
//     else{
//         console.log(data.toString());
//     }
// })