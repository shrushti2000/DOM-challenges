var gridContainer=document.querySelector(".grid-container");
var op=document.querySelector(".op")
var no;
var score=0;
var chance=0;
function start(){
    no=Math.floor(Math.random()*16);
    // console.log(gridContainer.childNodes);
     for(let i=1;i<gridContainer.childNodes.length;i++){
        if(gridContainer.childNodes[i].getAttribute("data-id")==no){
            gridContainer.childNodes[i].style.backgroundColor="grey";
        }
        setTimeout(()=>{
            gridContainer.childNodes[i].style.backgroundColor="white";
        },1000)
     }
   
}
function addScore(e){
  const el=e.target;
  console.log(el.getAttribute("data-id"))
  const clickedBox=el.getAttribute("data-id");

  if(no==clickedBox){
    console.log("clicked right")
    score++;
  }else{
    console.log("clicked wrong")
  }

}

window.addEventListener('DOMContentLoaded',()=>{
    // console.log("loaded")
  for(let i=0;i<64;i++){
    const box=document.createElement('div');
    box.className="box";
    box.setAttribute('data-id',i);
    gridContainer.appendChild(box);
  }
  start();
})

var myInt=setInterval(()=>{
  if(chance<5){
    
    console.log("chance is"+chance)
    start()
    chance++;
   
  }else{
    console.log("game over");
    clearInterval(myInt);
    displayResult();
    
  }
 
 },2000)
 function displayResult(){
   op.innerHTML="Your score is"+score
 }



gridContainer.addEventListener("click",addScore)
