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

var sliderimage=document.querySelector(".head-slider");
var leftClick =document.getElementById("slider-left-activate")
var rightClick =document.getElementById("slider-right-activate")
var slidermargin=0
rightClick.addEventListener("click",function(){
    // slidermargin+=100
    // if(slidermargin>200){
    //     slidermargin=0
    //     slidermargin.style.marginLeft="0"
    // }
    // else
    // {
    //     sliderimage.style.marginLeft="-"+slidermargin+"vw";
    // }
    
})

// leftClick.addEventListener("click",function(){
    
//     if(slidermargin==0)
//     {
//         slidermargin=200
//         sliderimage.style.marginLeft="-"+slidermargin+"vw"
//     }
//     else{
//         slidermargin-=100
//         sliderimage.style.marginLeft="-"+sliderimage+"vw";
//     }

// })