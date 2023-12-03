var menu=document.getElementById("menu-bar");
var slide=document.querySelector(".navbar-slide");
var close=document.getElementById("close")

menu.addEventListener("click",function(){

    console.log(slide)
    slide.style.left="0%";
})

close.addEventListener("click",function(){
    slide.style.left="-50%";
})