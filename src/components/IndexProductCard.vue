<template>
  <RouterLink :to="`/products/product/${slug}`">
    <div class="product">
      <img v-if="image" :src="image" alt="" class="product_image" />
      <p class="product_name">{{ name }}</p>
      <span class="product_price">À partir de: {{ price }}£</span>
      <div class="product_description" v-html="description"></div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
    },
    slug: {
      type: String,

      default: null,
    },
  },
  computed: {
    image() {
      if (!this.images.length) return;
      return this.images[0].src;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  border-radius: 5px;
  border: none;
  color: black;
  width: 410px;
  min-height: 410px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: $white;
  @media screen and (max-width: 800px) {
    max-width: 80%;
    margin: auto;
  }
  a {
    color: black;
  }
  &_image {
    border-radius: 5px;
    margin: auto;
    display: block;
    width: 80%;
    height: 80%;
  }
  &_name {
    width: 100%;
    @include product-card-title;
    margin-top: 60px;
    margin-bottom: 0;
    padding-left: 20px;
    line-height: 50px;
  }
  &_price {
    width: 100%;
    @include product-card-price;
    padding: 0 20px;
  }
  &_description {
    width: 100%;
    @include product-card-description;
    padding: 0 20px;
  }
}
</style>
