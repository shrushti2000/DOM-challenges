var openBtn=document.querySelector("#open-btn")
var closeBtn=document.querySelector("#close-btn")
var modal=document.querySelector(".modal-overlay")

function openModal(){
    modal.classList.add('display')
}
function closeModal(){
    modal.classList.remove("display")
}

openBtn.addEventListener("click",openModal)
closeBtn.addEventListener("click",closeModal)