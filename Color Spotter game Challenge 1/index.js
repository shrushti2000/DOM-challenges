var gridContainer=document.querySelector(".grid-container");


function start(){
    var no=Math.floor(Math.random()*16);
    console.log(gridContainer.childNodes);
     for(let i=1;i<gridContainer.childNodes.length;i++){
        if(gridContainer.childNodes[i].getAttribute("data-id")==no){
            gridContainer.childNodes[i].style.backgroundColor="grey";
        }
        setTimeout(()=>{
            gridContainer.childNodes[i].style.backgroundColor="white";
        },300)
     }
   
}

window.addEventListener('DOMContentLoaded',()=>{
    console.log("loaded")
  for(let i=0;i<16;i++){
    const box=document.createElement('div');
    box.className="box";
    box.setAttribute('data-id',i);
    gridContainer.appendChild(box);
  }
  start();
})

setInterval(()=>{
    start();
},1000)



