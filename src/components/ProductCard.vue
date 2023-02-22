<template>
  <div class="product">
    <RouterLink :to="`/products/${slug}`">
      <img v-if="image" class="product_image" :src="image" alt="" />
      <div class="product_content">
        <p class="product_name">{{ name }}</p>
        <span class="product_price">À partir de: {{ price }}£</span>
      </div>
    </RouterLink>
  </div>
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
  border-radius: 0;
  border: none;
  color: $white;
  width: 300px;
  height: 500px;
  a {
    color: $white;
  }
  &_image {
    max-width: 100%;
    height: 66%;
    display: block;
  }
  &_content {
    padding: 20px;
  }
  &_name {
    width: 100%;
    @include product-card-title;
    margin-top: 0;
    margin-bottom: 30px;
  }
  &_price {
    width: 100%;
    @include product-card-price;
  }
}
</style>
