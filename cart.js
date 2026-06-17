let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(id, name, price, image) {
    let item = cart.find(p => p.id === id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            qty: 1
        });
    }

    saveCart();
}

// REMOVE ITEM
function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
}

// CHANGE QTY
function changeQty(id, type) {
    let item = cart.find(p => p.id === id);

    if (item) {
        if (type === "inc") item.qty++;
        if (type === "dec") item.qty--;

        if (item.qty <= 0) {
            removeItem(id);
        }
    }

    saveCart();
}

// SAVE
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// LOAD CART PAGE
function loadCart() {
    let container = document.getElementById("cartContainer");
    let totalBox = document.getElementById("total");

    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        container.innerHTML += `
        <div class="card p-3 mb-3 d-flex flex-row align-items-center justify-content-between">
            
            <div class="d-flex align-items-center gap-3">
                <img src="${item.image}" width="80">
                <div>
                    <h6>${item.name}</h6>
                    <p>$${item.price}</p>
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-dark btn-sm" onclick="changeQty(${item.id}, 'dec')">-</button>
                <span>${item.qty}</span>
                <button class="btn btn-dark btn-sm" onclick="changeQty(${item.id}, 'inc')">+</button>
            </div>

        </div>
        `;
    });

    if (totalBox) totalBox.innerText = total;
}

// AUTO LOAD
document.addEventListener("DOMContentLoaded", loadCart);