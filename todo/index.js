var textInput=document.querySelector(".text-input")
var addBtn=document.querySelector("#btn")
var ulList=document.querySelector("#list")

function addTask(){
     
    const li= document.createElement('li')
    li.innerHTML=textInput.value
    ulList.appendChild(li)
    textInput.value=" "
}


addBtn.addEventListener("click",addTask)