let cart = [];

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    displayCart();
}

function displayCart() {
    let cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {
        let total = item.price * item.qty;
        grandTotal += total;

        cartTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button onclick="changeQty(${index}, -1)">-</button>
                    ${item.qty}
                    <button onclick="changeQty(${index}, 1)">+</button>
                </td>
                <td>${total}</td>
                <td>
                    <button onclick="removeItem(${index})">Remove</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("grand-total").textContent = grandTotal;
}

function changeQty(index, change) {
    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}
