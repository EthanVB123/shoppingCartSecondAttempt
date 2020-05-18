var removeCartItemButtons = document.getElementsByClassName('cartremovebtn')
for (var j = 0; j < removeCartItemButtons.length; j++) {
    var button = removeCartItemButtons[j]
    console.log(button)
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0, i < cartRows.length)


}