const colors = ['red', 'green', 'grey', 'pink', 'blue'];
const bgColor = document.querySelector("#bgcolor");
const btn = document.querySelector("#btn")

function changeColor() {
    var newColor = colors[getrandomColor()]
    document.body.style.backgroundColor = newColor;
    bgColor.innerHTML = newColor;
    bgColor.style.color = newColor;
}

function getrandomColor() {
    return Math.floor(Math.random() * colors.length)
}
btn.addEventListener("click", changeColor)