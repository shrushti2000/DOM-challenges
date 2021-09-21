const tabs=document.querySelectorAll('.tab')
const container=document.querySelector(".container")
const contents=document.querySelectorAll(".content")

container.addEventListener("click",function(e){
    const id=e.target.dataset.id;
    if(id){
        tabs.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add("active")
        })
        contents.forEach(function(content){
            content.classList.remove('active')
            const el=document.getElementById(id)
            el.classList.add('active')
        })
    }

})