import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    add(state, product) {
      state.cart.push(product);
    },
    increment(state, step = 1) {
      state.count += step;
    },
  },
});
