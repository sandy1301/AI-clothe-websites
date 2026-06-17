// FILTER PRODUCTS
function filterProducts(category) {
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let cat = product.getAttribute("data-category");

        if (category === "all") {
            product.style.display = "block";
        } else if (cat === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// SEARCH PRODUCTS
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.getAttribute("data-name");

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}