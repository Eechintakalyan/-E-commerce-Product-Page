function changeImage(image) {
    document.getElementById("mainImage").src = image.src;
}

function selectSize(sizeElement) {
    let sizes = document.querySelectorAll(".sizes span");
    sizes.forEach(s => s.classList.remove("active"));
    sizeElement.classList.add("active");
}

function changeQty(value) {
    let qtyBox = document.getElementById("qty");
    let qty = parseInt(qtyBox.value);

    qty += value;
    if (qty < 1) qty = 1;

    qtyBox.value = qty;
}

function addToCart() {
    let selectedSize = document.querySelector(".sizes span.active");
    let qty = document.getElementById("qty").value;

    if (!selectedSize) {
        alert("Please select a size!");
        return;
    }

    document.getElementById("cartMessage").textContent =
        `Added ${qty} item(s) - Size ${selectedSize.textContent} to your cart!`;
}
