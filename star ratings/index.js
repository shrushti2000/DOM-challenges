var stars=document.querySelector('.star-container')
var op=document.querySelector('.output')

function printRating(e){
  var element=e.target.id;
  console.log(element)
  op.innerHTML=`<div> Rating is ${element}</div>`
}

stars.addEventListener("click",printRating)
