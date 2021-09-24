const addToCartBtn=document.querySelector('.item-container')
var itemList=document.querySelector('.item-list')
var total=document.querySelector('.total')
function addToCart(e){
    
    if(e.target.classList.value==="addtocart"){
   console.log(e.target.parentElement)
   const element=e.target.parentElement;
   const title=element.querySelector('.item-name').innerHTML
   const img=element.querySelector('img').src

   const price=element.querySelector('.item-price').innerHTML

   
    
   
    const listItem=document.createElement("div")
    listItem.innerHTML=` <div class="cart-item">
    <img class="cart-img" src="${img}"/>
    <div class="cart-item-name">${title}</div>
    <div class="cart-price">${price}</div>
    <div class="cart-quantity"><input type="number" class="quantity-input"/><button> - </button></div>
</div> `
itemList.appendChild(listItem)
    }
    computeTotal
}
function computeTotal(){
    
}


addToCartBtn.addEventListener("click",addToCart)