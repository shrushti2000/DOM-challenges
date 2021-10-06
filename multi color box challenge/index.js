var container=document.querySelector('.container');

function takeAction(e){
    var element=e.target;
    console.log(element.id)
    var colorElement=element.id
    var colorr=container.querySelector(`#${colorElement}`);
   console.log(colorr)
}

container.addEventListener("click",takeAction)