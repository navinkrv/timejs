
function time(){
var current=new Date();
var hour= current.getHours();
var minutes=current.getMinutes();
var seconds=current.getSeconds()
document.querySelector("h2").innerHTML=hour+" : "+minutes+ " : "+seconds;
setTimeout(time,1000)
}
time();