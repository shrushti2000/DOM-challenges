const paint=document.querySelector('#paint')
const board=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        const square=document.createElement('div')
        square.style.height="30px";
        square.style.width="30px";
        square.setAttribute("data-x",i);
        square.setAttribute("data-y",j);
        square.className="square";
        square.style.border="1px solid grey";
        paint.appendChild(square);
        board[i][j]=square;
    }
}
console.log(board)

["black","red","orange","blue","green","teal","purple","pink","lime","grey"].map((e)=>{
    const color=document.createElement("div");
    color.style.height="30px";
    color.style.width="30px";
    color.className="palette"
    color.setAttribute("data-color",e);
    color.className="color";
    color.style.border="1px solid grey";
    color.style.backgroundColor=e;
    paint.appendChild(color);
    
});