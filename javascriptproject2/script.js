var main=document.querySelector('#main');
var crsr=document.querySelector('.cursor');

main.addEventListener("mousemove",function(delts){
    crsr.style.left=delts.x+"px";
    crsr.style.top=delts.y+"px";

})