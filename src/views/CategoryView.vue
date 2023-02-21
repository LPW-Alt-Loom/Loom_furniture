<template>
  <div v-for="(product, index) in products" :key="index">
    {{ $route.params }}
    <div>
      <img v-if="product.images.length" :src="product.images[0].src" alt="" />

      <p>{{ product.name }}</p>

      <span>{{ product.price }}</span>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios.js";
export default {
  name: "CategoryView",
  data() {
    return {
      products: [],
      category: [],
    };
  },
  async mounted() {
    const categoryResponse = await client.get(
      "wc/v3/products/categories?slug=" + this.$route.params.category
    );

    this.category = categoryResponse.data;

    const response = await client.get(
      "wc/v3/products?category=" + this.category[0].id
    );

    this.products = response.data;
  },

  async beforeRouteUpdate(to) {
    const categoryResponse = await client.get(
      "wc/v3/products/categories?slug=" + to.params.category
    );

    this.category = categoryResponse.data;

    const response = await client.get(
      "wc/v3/products?category=" + this.category[0].id
    );

    this.products = response.data;
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>
