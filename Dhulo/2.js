const scroll = new LocomotiveScroll({
    el: document.querySelector(['#main']),
    smooth: true
});

var a=document.querySelector("#ele1");
a.addEventListener("mouseenter",function(){
    var img=a.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img})`
})