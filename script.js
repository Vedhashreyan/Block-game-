function moveleft(){
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left>=0){
        character.style.left = left+"px"
    }
   
}

function moveright(){
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left +=100;
    if(left<300) {
     character.style.left = left+"px"
}
 
}

document.addEventListener("keydown",event=>{
    if(event.key==="ArrowLeft"){
        moveleft();
    }
    if(event.key==="ArrowRight"){
        moveright();
    }
})

var block = document.getElementById("block");
var counter=0
block.addEventListener('animationiteration',()=>{
    var random=Math.floor(Math.random()*3)
    left=random * 100;
    block.style.left=left+"px";
    counter++
})

setInterval(function(){
    var characterLeft=parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    var blockLeft=parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    var blockTop=parseInt(window.getComputedStyle(block)
    .getPropertyValue("top"));
    if(characterLeft == blockLeft && blockTop<500 && blockTop>300){
        alert("GAME OVER.Score "+counter);
        block.style.animation="none";

    }

},1)

document.getElementById("left").addEventListener("touchstart",moveleft);document.getElementById("right").addEventListener("touchstart",moveright);



