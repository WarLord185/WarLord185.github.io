function openNav() {
  if (document.getElementById("mySidebar").style.width == "250px") {
    closeNav();
  } else {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

const buttons = document.querySelectorAll('.cart-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const addToCart = button.querySelector('.add-to-cart');
        const addedToCart = button.querySelector('.added-to-cart');
        const cart = button.querySelector('.fa-shopping-cart');
        const bag = button.querySelector('.fa-shopping-bag');

        addToCart.classList.add('add-to-cart-animation')
        addedToCart.classList.add('added-to-cart-animation')

        cart.style.animation = 'cart 2000ms ease-in-out forwards'
        bag.style.animation = 'bag 2000ms 700ms ease-in-out forwards'
    })
})