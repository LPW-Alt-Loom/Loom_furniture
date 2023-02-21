<script>
export default {
  data() {
    return {
      classname: `button -${this.type}`,
    };
  },
  props: {
    text: String,
    link: String,
    type: String,
  },
};
</script>
<template>
  <a v-if="link" :href="link" :class="classname">{{ text }}</a>
  <button v-else :class="classname">{{ text }}</button>
</template>
<style lang="scss" scoped>
.button {
  display: block;
  width: 413px;
  text-decoration: none;
  padding: rem(15);
  font-size: rem(20);
  font-family: "Krylon", sans-serif;
  text-align: center;
  &.-primary {
    background-color: $primary-color;
    color: $white;
  }
  &.-toned {
    background-color: $toned-color;
    color: $primary-color;
  }
  &.-outline_primary {
    background-color: $white;
    color: $primary-color;
    border: 1px solid $primary-color;
  }
  &.-outline_white {
    background-color: $white;
    color: $white;
    border: 1px solid $white;
  }
  &:hover {
    color: $white;
    background: $secondary-color;
  }
}
</style>
