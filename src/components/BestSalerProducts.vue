<template>
  <div class="products">
    <MyTitle type="h2_uppercase" size="big" :text="title" color="white" />
    <div class="products_list">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          :slug="product.slug"
          :name="product.name"
          :images="product.images"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import MyTitle from "@/components/MyTitle.vue";

export default {
  components: { ProductCard, MyTitle },
  props: {
    products: {
      type: Array,
      default: () => {},
    },
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.products {
  .products_list {
    display: flex;
    flex-flow: nowrap;
    justify-content: space-evenly;
  }
}
</style>
