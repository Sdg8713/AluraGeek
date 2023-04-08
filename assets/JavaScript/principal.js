let cartIcon = document.querySelector("#carrito-icon");
let cart = document.querySelector(".carrito");
let closeCart= document.querySelector("#cerrar-carrito");

cartIcon.onclick = () => {
    cart.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");
}
console.log(cartIcon);
console.log(closeCart);

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    let removeCartButtons = document.getElementsByClassName('cerrar-carrito');
    console.log(removeCartButtons);
    for (i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButton[i];
        button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}