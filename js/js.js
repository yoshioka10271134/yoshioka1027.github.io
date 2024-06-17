let $btn_webs=document.getElementById("btn_webs");
let $btn_graphics=document.getElementById("btn_graphics");
let $contents_webs=document.getElementById("contents_webs");
let $contents_graphics=document.getElementById("contents_graphics");
let $warks=document.getElementById("warks");

$btn_webs.addEventListener("click",function(){
    $btn_webs.classList.add("active")
    $contents_webs.classList.add("active");
    $btn_graphics.classList.remove("active")
    $contents_graphics.classList.remove("active");
    $warks.style.height="2200px"
});

$btn_graphics.addEventListener("click",function(){
    $btn_webs.classList.remove("active")
    $contents_webs.classList.remove("active");
    $btn_graphics.classList.add("active")
    $contents_graphics.classList.add("active");
    $warks.style.height="1800px"
});


