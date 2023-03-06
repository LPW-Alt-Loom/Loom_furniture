import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    set(state, products) {
      state.cart = products;
    },
    add(state, { product, quantity }) {
      const productInState = state.cart.find(
        (stateProduct) => stateProduct.id === product.id
      );
      if (!productInState) {
        // If product not in cart -> add product to cart
        state.cart.push({ ...product, quantity });
      } else {
        // If product is already in cart -> increase quantity
        alert("Il ne peuc y avoir q'un produit dans le panier");
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove(state, id) {
      const index = state.cart.findIndex(
        (stateProduct) => stateProduct.id === id
      );
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
