//原生模块、核心模块

const events=require("events");
var EventEmitter=events.EventEmitter;//EventEmitter 的核心就是事件触发与事件监听器功能的封装。
function Dog(name,energy){
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;

}
Dog.prototype.__proto___=EventEmitter.prototype;
module.exports=Dog;//对外公开