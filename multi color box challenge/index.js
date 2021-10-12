var container=document.querySelector('.container');
var paintContainer=document.querySelector('.paint-container')
var btn=document.querySelector('.btn')
var colorr;
const colorPalette=['blue','green','pink','red','grey']
window.addEventListener('DOMContentLoaded', (event) => {
    for(let i=0;i<25;i++){
        const devElement=document.createElement("div");
        devElement.className="sub-container";
        paintContainer.appendChild(devElement)
    }
    var j=0;
    for(let i=0;i<5;i++){
        const devElement=document.createElement("div");
        devElement.className="sub-container";
        console.log(colorPalette[j])
        devElement.setAttribute("data-color",`${colorPalette[j]}`);
        devElement.style.backgroundColor=`${colorPalette[j]}`;
        container.appendChild(devElement);
        j++;

    }
});

function takeAction(e){
    var element=e.target;
    console.log(element.id)
    var colorElement=element.id
     colorr=element.getAttribute("data-color");
    console.log(colorr)
}
function colorBox(e){
    var el=e.target;
    console.log(el)
    console.log(colorr);
    e.target.style.backgroundColor=colorr;
}

function reset(){
    var c=paintContainer.childNodes;
    console.log(c)
    for(let i=0;i<c.length-1;i++){
        c[i+1].style.backgroundColor="white"
    }
   
}

container.addEventListener("click",takeAction)
paintContainer.addEventListener("click",colorBox)
btn.addEventListener("click",reset)