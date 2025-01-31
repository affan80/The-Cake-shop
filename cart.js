// Sample bakery products
const bakeryItems = [
    { id: 1, name: "Chocolate Cake", price: 500, quantity: 1, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Strawberry Pastry", price: 150, quantity: 1, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Butter Cookies", price: 250, quantity: 1, img: "https://via.placeholder.com/100" }
];

let cart = [];

// Function to add items to cart
function addToCart(id) {
    let item = bakeryItems.find(product => product.id === id);
    let itemInCart = cart.find(product => product.id === id);

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...item });
    }

    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear previous items

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.img}" alt="Product Image">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <div>
                <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    updateTotal();
}

// Function to update total price
function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total-price").innerText = total;
}

// Function to change quantity
function changeQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1); // Remove item if quantity is 0
    }
    displayCart();
}

// Function to remove an item from cart
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to place order
function placeOrder() {
    if (cart.length > 0) {
        alert("🎉 Order placed successfully!");
        cart = []; // Clear cart after order
        displayCart();
    } else {
        alert("⚠️ Your cart is empty!");
    }
}

// Initialize cart display
displayCart();
