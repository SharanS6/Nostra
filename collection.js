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


// collections selction

var summer=document.getElementById("summer")
var party=document.getElementById("Party")
var beach=document.getElementById("Beach")
var red=document.getElementById("Red")
var blue=document.getElementById("Blue")
var green=document.getElementById("Green")
var white=document.getElementById("White")
var newOne=document.getElementById("New")
var oldOne=document.getElementById("Old")

var products=document.querySelectorAll(".collection-shirts-items")
var products1=document.querySelectorAll(".collection-shirts-items1")
var products2=document.querySelectorAll(".collection-shirts-items2")
console.log(products2)
summer.addEventListener("change",function(){
    
// console.log("hi")
if (this.checked) {
    for(i=0;i<products.length;i=i+1)
    {
        products[i].style.display="none"
        // 
    }
    for(k=0;k<products2.length;k=k+1)
    {
        products2[k].style.display="none"
    }
    for(j=0;j<products1;j=j+1)
    {
        products1[i].style.display="block"
    }
  } else {
    for(var i=0;i<products.length;i=i+1)
    {
        products[i].style.display="block"
    }
    for(k=0;k<products2.length;k=k+1)
    {
        products2[k].style.display="block"
    }
}
})
