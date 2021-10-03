var mainContainer=document.querySelector('.main-container');

function blink(e){
    const clickedDiv=e.target
    console.log(clickedDiv)
    clickedDiv.style.backgroundColor='green'
    setTimeout(()=>{
        clickedDiv.style.backgroundColor='white';
    },300)
}

mainContainer.addEventListener("click",blink)
