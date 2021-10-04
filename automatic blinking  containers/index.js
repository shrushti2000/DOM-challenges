var mainContainer=document.querySelector('.main-container');
var i=1;
function blink(){
    if(i<5){
    const element =`container${i}`;
    const clickedDiv=document.querySelector(`.${element}`)
    console.log(clickedDiv)
    clickedDiv.style.backgroundColor='green'
    setTimeout(()=>{
        clickedDiv.style.backgroundColor='white';
    },300)
    i++;
}
}

setInterval(blink,1000)


