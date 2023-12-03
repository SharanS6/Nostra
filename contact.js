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