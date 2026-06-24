const CartManager = {
    getCart() {
        const cartStr = localStorage.getItem('nanxingcheng_cart');
        return cartStr ? JSON.parse(cartStr) : [];
    },
    saveCart(cart) {
        localStorage.setItem('nanxingcheng_cart', JSON.stringify(cart));
        this.updateCartUI();
    },
    addItem(item) {
        const cart = this.getCart();
        // Check if an identical item exists in the cart
        const existingItemIndex = cart.findIndex(i => 
            i.id === item.id && 
            i.flavorName === item.flavorName && 
            i.sizeName === item.sizeName
        );

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += item.quantity;
        } else {
            cart.push(item);
        }
        this.saveCart(cart);
    },
    removeItem(index) {
        const cart = this.getCart();
        cart.splice(index, 1);
        this.saveCart(cart);
    },
    updateQuantity(index, quantity) {
        const cart = this.getCart();
        if (quantity <= 0) {
            this.removeItem(index);
            return;
        }
        cart[index].quantity = quantity;
        this.saveCart(cart);
    },
    clearCart() {
        localStorage.removeItem('nanxingcheng_cart');
        this.updateCartUI();
    },
    updateCartUI() {
        const cart = this.getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Update cart summary button in order.html if it exists
        const cartSummaryBtn = document.querySelector('.cart-summary');
        if (cartSummaryBtn) {
            cartSummaryBtn.innerHTML = `🛒 購物車 (${totalItems})`;
        }
    }
};

// Initialize UI on load
document.addEventListener('DOMContentLoaded', () => {
    CartManager.updateCartUI();
});
