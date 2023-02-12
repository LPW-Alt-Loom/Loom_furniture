<template>
  <div class="showroom">
    <div class="container">
      <h2 class="showroom__title">{{ title }}</h2>

      <div class="showroom__images | row">
        <div class="showroom__media | column -size-6" v-for="(image, index) in WPImages" :key="index">
          <img :src="image.url" :alt="image.alt" class="showroom__image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showroom.vue",
  props: {
    title: {
      type: String,
      default: null
    },
    images: {
      type: Object,
      default: null
    }
  },
  computed: {
    WPImages()
    {
      if (!this.images) return
      const images = []

      // Check if left_image exists
      if (this.images.left_image) {
        images.push(this.images.left_image);
      }

      // Check if right_image exists
      if (this.images.right_image) {
        images.push(this.images.right_image);
      }
      // Return image urls
      return images
    }
  }
};
</script>

<style scoped>

</style>