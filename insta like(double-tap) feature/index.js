var clickImg=document.querySelector('.img');
var likeCount=document.querySelector('.like-count');
var container=document.querySelector('.container')

var count=0;



container.addEventListener('dblclick',()=>{
    console.log("clicked")
    count++;
    likeCount.innerHTML=count;
    var element=document.createElement('i');
    element.classList.add('fa');
    element.classList.add('fa-heart');
    container.appendChild(element)
    setTimeout(()=>{
        element.remove()
    },800);

})
