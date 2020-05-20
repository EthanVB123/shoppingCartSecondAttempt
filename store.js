// What follows is the initialisation of the remove buttons
updateCartTotal()
setInterval(updateCartTotal, 500)
var removeCartItemButtons = document.getElementsByClassName('cartremovebtn')
for (var j = 0; j < removeCartItemButtons.length; j++) {
    var button = removeCartItemButtons[j]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
// What follows is the initialisation of the update cart total button
var updateButton = document.getElementsByClassName('purchasebtn')[1]
updateButton.addEventListener('click', updateCartTotal())

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        console.log(price)
        var quantity = quantityElement.value
        console.log(price * quantity)
        total += (price*quantity)

    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total


}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
    
}