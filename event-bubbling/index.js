var mainContainer=document.querySelector('.main-container')
var subContainer=document.querySelector('.sub-container')
var childContainer=document.querySelector('.child-container')

function mainContainer(){
    console.log("main Container")
}
function subContainer(){
    console.log("main Container")
}
function childContainer(){
    console.log("child continer")
}

mainContainer.addEventListener("click",mainContainer)
subContainer.addEventListener("click",subContainer)
childContainer.addEventListener("click",childContainer)