var mainContainer=document.querySelector('.main-container');
var i=1;
function blink(){
    if(i<5){
    var element =`container${i}`;
    var currentDiv=document.querySelector(`.${element}`)
    console.log(currentDiv)
    currentDiv.style.backgroundColor='green'
    setTimeout(()=>{
        currentDiv.style.backgroundColor='white';
    },300)
    i++;
}
}
function addScore(e){
    const clickedDiv=e.target
    console.log(clickedDiv.classList.value)
    if(clickedDiv.classList.value===currentDiv.classList.value){
        console.log("yeah")
    } 
}
mainContainer.addEventListener("click",addScore)

setInterval(blink,1000)


