const nos = ['0', '1', '2', '3', '4', '5', '6', '7', 'A', 'B', 'C', 'D', 'E', 'F']

const bgColor = document.querySelector("#bgcolor");
const btn = document.querySelector("#btn")

function changeColor() {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += nos[getrandomNo()]
    }

    document.body.style.backgroundColor = hexCode;
    bgColor.innerHTML = hexCode;
    bgColor.style.color = hexCode;
}

function getrandomNo() {
    return Math.floor(Math.random(nos) * nos.length)
}
btn.addEventListener("click", changeColor)