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
// offer close
var closeOffer=document.getElementById("close-offer")
var offer=document.querySelector(".nav-offer")
closeOffer.addEventListener("click",function(){
    offer.style.display="none"
})

var sliderimage=document.querySelector(".head-slider");
var leftClick =document.getElementById("slider-left-activate")
var rightClick =document.getElementById("slider-right-activate")

rightClick.addEventListener("click",function(event){
    sliderimage.style.scrollBehavior="auto"   
    sliderimage.scrollLeft +=200;
})

leftClick.addEventListener("click",function(){
    sliderimage.style.scrollBehavior="auto"
    sliderimage.scrollLeft -=200;
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