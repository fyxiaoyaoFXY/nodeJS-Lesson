// function circleFun(r){
//     this.circumference=function(){
//         return 3.14*2*r;
//     }
//     this.area=function(){
//         return 3.14*r*r;
//     }
// }
// circleFun.exports={
//     circumference:circumference,
//     area:area
// }

function circleFun(r){
    function circumference(){
        return a*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return {circumference:circumference,area:area}
}

module.exports={
    circleFun:this.circleFun
}