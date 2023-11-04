// Define an array to store items in the shopping cart
const shoppingCart = [];

// Function to add an item to the shopping cart
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    shoppingCart.push(item);
}

// Function to update the shopping cart display
function updateCartDisplay() {
    const cartTable = document.getElementById('shopping-cart');

    // Clear the existing cart content
    cartTable.innerHTML = '';

    // Iterate through the shoppingCart array and add items to the cart display
    shoppingCart.forEach((item, index) => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button></td>
        `;
    });

    // Attach event listeners to the "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

// Function to remove an item from the shopping cart
function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartDisplay();
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemName = button.parentNode.parentNode.cells[0].innerText;
        const itemPrice = button.parentNode.parentNode.cells[1].innerText;
        addToCart(itemName, itemPrice);
        updateCartDisplay();
    });
});

// Initialize the cart display
updateCartDisplay();